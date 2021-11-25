// Conveniently import this file anywhere to use db

import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/storage'

const firebaseConfig = {
    apiKey: "AIzaSyDfe3fAPFyAEb8bdVJdRsLUGH9Tsy8fLdo",
    authDomain: "tienda-cellphone.firebaseapp.com",
    projectId: "tienda-cellphone",
    storageBucket: "tienda-cellphone.appspot.com",
    messagingSenderId: "951737142074",
    appId: "1:951737142074:web:c85b1c5336f67cb0d21e03"
  };

var app=firebase.initializeApp(firebaseConfig);

export const db = app.firestore()
export const storage=app.storage();


// Export types that exists in Firestore - Uncomment if you need them in your app
// const { Timestamp, GeoPoint } = firebase.firestore
// export { Timestamp, GeoPoint }
