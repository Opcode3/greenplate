//Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore} from 'firebase/firestore'
import { getStorage } from 'firebase/storage'
// import { getAnalytics } from "firebase/analytics";

//TODO: Add SDKs for Firebase products that you want to use
//https://firebase.google.com/docs/web/setup#available-libraries

//Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBXTieqhMYXDTmlAeQwQ1bjQMIE4DJUVfE",
  authDomain: "greenplate-project.firebaseapp.com",
  projectId: "greenplate-project",
  storageBucket: "greenplate-project.appspot.com",
  messagingSenderId: "261360887561",
  appId: "1:261360887561:web:cbe49fe2b986594a8dd5d8",
  measurementId: "G-C02B166RD3"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const database = getFirestore(app);
export const storage = getStorage(app);
// const analytics = getAnalytics(app);