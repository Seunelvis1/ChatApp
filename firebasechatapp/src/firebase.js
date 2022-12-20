import {initializeApp} from "firebase/app";
import  {getFirestore} from "firebase/firestore"
import {getStorage} from "firebase/storage"
import {getAuth} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDbHgtOX3Gy333J9O9SOm3vMfedY-2y9jE",
  authDomain: "seunelvis-7fbf5.firebaseapp.com",
  projectId: "seunelvis-7fbf5",
  storageBucket: "seunelvis-7fbf5.appspot.com",
  messagingSenderId: "1099419946077",
  appId: "1:1099419946077:web:d76de4725a2531751451b4"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

export {auth, db, storage};