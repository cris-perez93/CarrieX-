
import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'

const firebaseConfig = {
  apiKey: 'AIzaSyC-4pxkm_g-vWmumb7OlSg_Ai6L6FHhhQA',
  authDomain: 'carriex-ea10b.firebaseapp.com',
  projectId: 'carriex-ea10b',
  storageBucket: 'carriex-ea10b.appspot.com',
  messagingSenderId: '143117075351',
  appId: '1:143117075351:web:825ee109be661cd5f0fad2',
  measurementId: 'G-THC2GKZ83B'
}

export const app = initializeApp(firebaseConfig)
export const auth = getAuth(app)
export const db = getFirestore(app)
export const storage = getStorage(app)
