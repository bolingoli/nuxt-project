import firebase from 'firebase/app'
import 'firebase/auth'

const config = {
  apiKey: 'AIzaSyBz_ZIpcUaW4efugsJHEQY7HtTnlAopbus',
  authDomain: 'web-kitapyurdu-project.firebaseapp.com',
  projectId: 'web-kitapyurdu-project',
  storageBucket: 'web-kitapyurdu-project.appspot.com',
  messagingSenderId: '274143437952',
  appId: '1:274143437952:web:c1bce6e66da815f4b2f265',
  measurementId: 'G-7DE3631S1C'
}

if (!firebase.apps.length) {
  // eslint-disable-next-line no-undef
  firebase.initializeApp(config)
}

const auth = firebase.auth()
export { auth }
