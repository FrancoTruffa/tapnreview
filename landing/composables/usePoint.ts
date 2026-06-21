import {
  doc,
  getDoc,
  collection,
  addDoc,
  updateDoc,
  Timestamp,
} from 'firebase/firestore'

export interface NfcPoint {
  label: string
  type: 'table' | 'counter' | 'entrance' | 'generic'
  active: boolean
  clientId: string
  businessId: string
  locationId: string
  qrGeneratedAt?: string
  nfcProgrammedAt?: string
}

export interface Location {
  name: string
  address: string
  placeId: string
  reviewUrl?: string
  whatsappNumber: string
}

export interface PointData {
  pointId: string
  point: NfcPoint
  location: Location
  reviewUrl: string
}

export const usePoint = (pointId: string) => {
  const { $db } = useNuxtApp()

  const data = ref<PointData | null>(null)
  const loading = ref(true)
  const error = ref<string | null>(null)
  const scanId = ref<string | null>(null)

  const load = async () => {
    try {
      const pointSnap = await getDoc(doc($db, 'nfc_points', pointId))

      if (!pointSnap.exists()) {
        error.value = 'punto-no-encontrado'
        return
      }

      const point = pointSnap.data() as NfcPoint

      if (!point.active) {
        error.value = 'punto-inactivo'
        return
      }

      const locationSnap = await getDoc(
        doc($db, 'clients', point.clientId, 'businesses', point.businessId, 'locations', point.locationId)
      )

      if (!locationSnap.exists()) {
        error.value = 'local-no-encontrado'
        return
      }

      const location = locationSnap.data() as Location

      const reviewUrl =
        location.reviewUrl ||
        `https://search.google.com/local/writereview?placeid=${location.placeId}`

      data.value = { pointId, point, location, reviewUrl }

      // Registrar el scan (fire-and-forget, no bloquea el render)
      addDoc(collection($db, 'scans'), {
        pointId,
        locationId: point.locationId,
        businessId: point.businessId,
        clientId: point.clientId,
        timestamp: Timestamp.now(),
        userAgent: navigator.userAgent,
        rating: null,
      }).then((ref) => {
        scanId.value = ref.id
      })
    } catch (e) {
      console.error('[usePoint]', e)
      error.value = 'error-generico'
    } finally {
      loading.value = false
    }
  }

  const updateScanRating = (rating: number) => {
    if (!scanId.value) return
    updateDoc(doc($db, 'scans', scanId.value), { rating }).catch(() => {})
  }

  onMounted(load)

  return { data, loading, error, updateScanRating }
}
