import { initializeApp} from "firebase/app";
import { getFirestore} from 'firebase/firestore'
import { getStorage } from 'firebase/storage'
const firebaseConfig = {
  apiKey: "AIzaSyBXTieqhMYXDTmlAeQwQ1bjQMIE4DJUVfE",
  authDomain: "greenplate-project.firebaseapp.com",
  projectId: "greenplate-project",
  storageBucket: "greenplate-project.appspot.com",
  messagingSenderId: "261360887561",
  appId: "1:261360887561:web:cbe49fe2b986594a8dd5d8",
  measurementId: "G-C02B166RD3"
};
export const app = initializeApp(firebaseConfig);
export const database = getFirestore(app);
export const storage = getStorage(app);