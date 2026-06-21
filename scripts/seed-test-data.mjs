/**
 * Script para insertar datos de prueba en Firestore.
 *
 * Requisitos:
 *   npm install -g firebase-tools
 *   firebase login
 *
 * Uso:
 *   node scripts/seed-test-data.mjs
 *
 * Crea los siguientes documentos:
 *   /clients/client-demo
 *   /clients/client-demo/businesses/biz-demo
 *   /clients/client-demo/businesses/biz-demo/locations/loc-demo
 *   /clients/client-demo/businesses/biz-demo/locations/loc-demo/nfc_points/punto-demo
 *   /nfc_points/punto-demo  ← top-level para lectura rápida de la landing
 *
 * Luego abrí: http://localhost:3000/r/punto-demo
 */

import { initializeApp, cert, getApps } from 'firebase-admin/app'
import { getFirestore, Timestamp } from 'firebase-admin/firestore'
import { readFileSync } from 'fs'
import { resolve, dirname } from 'path'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))

// ─── Configuración ────────────────────────────────────────────────────────────
// Opción A: service account JSON descargado desde Firebase Console
//   Firestore Console → Project Settings → Service Accounts → Generate new private key
const SERVICE_ACCOUNT_PATH = resolve(__dirname, '../serviceAccountKey.json')

// Opción B: emulador local (cambiá los datos de abajo y comentá la inicialización con cert)
const USE_EMULATOR = process.env.USE_EMULATOR === 'true'

// Datos de prueba — editá según necesites
const TEST_DATA = {
  clientId: 'client-demo',
  businessId: 'biz-demo',
  locationId: 'loc-demo',
  pointId: 'punto-demo',

  client: {
    name: 'Demo S.A.',
    email: 'demo@tapnreview.com',
    plan: 'starter',
    createdAt: Timestamp.now(),
  },

  business: {
    name: 'La Parrilla Demo',
    category: 'restaurant',
    logoUrl: null,
  },

  location: {
    name: 'La Parrilla Demo',
    address: 'Av. Colón 1234, Córdoba',
    // Reemplazá por un Place ID real de Google Maps
    // Buscalo en: https://developers.google.com/maps/documentation/places/web-service/place-id
    placeId: 'ChIJN1t_tDeuEmsRUsoyG83frY4',
    reviewUrl: '',   // se construye automáticamente a partir del placeId si está vacío
    whatsappNumber: '5493511234567',  // sin + ni espacios
  },

  point: {
    label: 'Mesa 7',
    type: 'table',
    active: true,
    qrGeneratedAt: null,
    nfcProgrammedAt: null,
  },
}
// ─────────────────────────────────────────────────────────────────────────────

async function main() {
  if (USE_EMULATOR) {
    process.env.FIRESTORE_EMULATOR_HOST = 'localhost:8080'
    initializeApp({ projectId: 'tapnreview-demo' })
    console.log('🔧 Usando emulador de Firestore en localhost:8080')
  } else {
    let serviceAccount
    try {
      serviceAccount = JSON.parse(readFileSync(SERVICE_ACCOUNT_PATH, 'utf-8'))
    } catch {
      console.error(`\n❌ No se encontró serviceAccountKey.json en: ${SERVICE_ACCOUNT_PATH}`)
      console.error('   Descargalo desde Firebase Console → Project Settings → Service Accounts\n')
      process.exit(1)
    }
    if (!getApps().length) {
      initializeApp({ credential: cert(serviceAccount) })
    }
    console.log('🔥 Conectado a Firestore con service account')
  }

  const db = getFirestore()
  const { clientId, businessId, locationId, pointId } = TEST_DATA

  const locationPath = `clients/${clientId}/businesses/${businessId}/locations/${locationId}`
  const pointNestedPath = `${locationPath}/nfc_points/${pointId}`

  // Datos desnormalizados para el documento top-level
  const pointTopLevel = {
    ...TEST_DATA.point,
    clientId,
    businessId,
    locationId,
  }

  const writes = [
    db.doc(`clients/${clientId}`).set(TEST_DATA.client),
    db.doc(`clients/${clientId}/businesses/${businessId}`).set(TEST_DATA.business),
    db.doc(locationPath).set(TEST_DATA.location),
    db.doc(pointNestedPath).set(pointTopLevel),
    db.doc(`nfc_points/${pointId}`).set(pointTopLevel),  // top-level para la landing
  ]

  await Promise.all(writes)

  const reviewUrl = TEST_DATA.location.reviewUrl ||
    `https://search.google.com/local/writereview?placeid=${TEST_DATA.location.placeId}`

  console.log('\n✅ Datos de prueba insertados correctamente\n')
  console.log(`   Point ID:    ${pointId}`)
  console.log(`   Local:       ${TEST_DATA.location.name}`)
  console.log(`   WhatsApp:    ${TEST_DATA.location.whatsappNumber}`)
  console.log(`   Review URL:  ${reviewUrl}`)
  console.log('\n   Abrí en el browser (con dev server corriendo):')
  console.log(`   http://localhost:3000/r/${pointId}\n`)
}

main().catch((e) => {
  console.error(e)
  process.exit(1)
})
