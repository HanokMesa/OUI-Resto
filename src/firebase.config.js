import {getApp, getApps, initializeApp} from "firebase/app"
import {getFirestore} from "firebase/firestore"
import {getStorage} from "firebase/storage"

const firebaseConfig = {
    apiKey: "AIzaSyA1-QnW1L-zYTTHIGj-EsqLm0axG5S9psA",
    authDomain: "oui-restaurant-30d53.firebaseapp.com",
    databaseURL: "https://oui-restaurant-30d53-default-rtdb.firebaseio.com",
    projectId: "oui-restaurant-30d53",
    storageBucket: "oui-restaurant-30d53.appspot.com",
    messagingSenderId: "587888420684",
    appId: "1:587888420684:web:5fff044d3f9235329bd1e9"
  };

  const app= getApps.length>0? getApp() : initializeApp(firebaseConfig)

  const firestore=getFirestore(app)
  const storage=getStorage(app)

  export {app,firestore,storage}