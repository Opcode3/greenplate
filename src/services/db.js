import {database, storage} from '@/configs/firebaseConfig'
import { collection, addDoc, updateDoc, deleteDoc, getDoc} from "firebase/firestore"; 
import {ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";


export async function login (email, password){
    
}

export async function createUser(data){
    
}


// import { collection, query, where, getDocs } from "firebase/firestore";

// const q = query(collection(db, "cities"), where("capital", "==", true));

// const querySnapshot = await getDocs(q);
// querySnapshot.forEach((doc) => {
//   // doc.data() is never undefined for query doc snapshots
//   console.log(doc.id, " => ", doc.data());
// });


// import { collection, getDocs } from "firebase/firestore";

// const querySnapshot = await getDocs(collection(db, "cities"));
// querySnapshot.forEach((doc) => {
//   // doc.data() is never undefined for query doc snapshots
//   console.log(doc.id, " => ", doc.data());
// });


const addData = async (table_name, data) => {
    try {
        const docRef = await addDoc(collection(database, table_name), data);
        console.log("Document written with ID: ", docRef.id);
        console.log(docRef);
        return true;
    } catch (e) {
        console.error("Error adding document: ", e);
        return false;
    }
}

const deleteData = async (table_name, delete_key) => {
    try {
        await deleteDoc(doc(database, table_name, delete_key));
        return true;
    } catch (e) {
        console.error("Error adding document: ", e);
        return false;
    }
}

const getData = async (table_name, get_key,) => {
    try {
        const docSnap = await getDoc(doc(database, table_name, get_key));
        if(docSnap.exists()){
            console.log("Document data:", docSnap.data());
            return docSnap.data();
        }else{
            console.log("No such document!");
            return 'No such document exist'
        }
    } catch (e) {
        console.error("Error adding document: ", e);
        return e.message;
    }
}

const updateData = async (table_name, update_key, data) => {
    try {
        const docRef = await updateDoc( doc(database, table_name, update_key), data);
        console.log("Document written with ID: ", docRef.id);
        console.log(docRef);
        return true;
    } catch (e) {
        console.error("Error adding document: ", e);
        return false;
    }
}

const uploadImage = async (file) => {
    const storageRef = ref(storage, 'images/' + file.name);
    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on('state_changed', 
        (snapshot) => {
            const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            console.log('Upload is ' + progress + '% done');
        }, 
        (error) => {
            console.log(error.message)
        },
        () => {
            // Upload completed successfully, now we can get the download URL
            getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
              console.log('File available at', downloadURL);
            });
          }
    )
}

