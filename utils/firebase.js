import firebase from 'firebase/app'
import 'firebase/firestore'



  const firebaseConfig = {
    apiKey: "AIzaSyAbuZzIdH3DSmJoksy4Px3dYr7BLUCkZak",
    authDomain: "restoo-adb36.firebaseapp.com",
    projectId: "restoo-adb36",
    storageBucket: "restoo-adb36.appspot.com",
    messagingSenderId: "828198496556",
    appId: "1:828198496556:web:75422304e16c090c316489"
  };
  // Initialize Firebase
 export const firebaseApp = firebase.initializeApp(firebaseConfig)