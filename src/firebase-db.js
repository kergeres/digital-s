import firebase from 'firebase/app'
import 'firebase/firestore'

export const db = firebase
.initializeApp({
    apiKey: "AIzaSyBkKCP6RwKL31y1jtw27QxQtK8LdHHAP_I",
    authDomain: "dgt-startupf.firebaseapp.com",
    databaseURL: "https://dgt-startupf.firebaseio.com",
    projectId: "dgt-startupf",
    storageBucket: "dgt-startupf.appspot.com",
    messagingSenderId: "777982772530",
    appId: "1:777982772530:web:9e412ed806d8ba0070832b",
    measurementId: "G-QDSENCDVZ0"
})
.firestore()

export const postRef = db.collection('test')