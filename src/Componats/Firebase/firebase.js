import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import 'firebase/compat/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyBr0F_zjO1qYfxxismYCV4A_tqRPNyTDNE',
  authDomain: 'twitter-clone-324a4.firebaseapp.com',
  projectId: 'twitter-clone-324a4',
  storageBucket: 'twitter-clone-324a4.appspot.com',
  messagingSenderId: '651298014681',
  appId: '1:651298014681:web:8b57f6ad3466f5fbe185c8',
  measurementId: 'G-XKRK9DG0YP',
}

const firebaseApp = firebase.initializeApp(firebaseConfig)

const db = firebaseApp.firestore()

export default db
