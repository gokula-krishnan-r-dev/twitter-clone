import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import 'firebase/compat/firestore'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyBtgaG2ounl4ir3qhQXKSwFIuWD10ubZVw',
  authDomain: 'twitter-clone-1-cb7db.firebaseapp.com',
  projectId: 'twitter-clone-1-cb7db',
  storageBucket: 'twitter-clone-1-cb7db.appspot.com',
  messagingSenderId: '886636602687',
  appId: '1:886636602687:web:3fea375337826930239f8a',
  measurementId: 'G-KJLZVF8FKL',
}
const firebaseApp = firebase.initializeApp(firebaseConfig)

const db = firebaseApp.firestore()

export default db
