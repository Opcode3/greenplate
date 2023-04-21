import {database, storage} from '@/configs/firebaseConfig'
import { collection, addDoc, setDoc, doc, updateDoc, deleteDoc, query, where, getDoc, getDocs} from "firebase/firestore"; 
import {ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";

// const q = query(collection(db, "cities"), where("capital", "==", true));


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

const setData = async (table_name, key, data) => {
    try {
        const docRef = await setDoc(doc(database, table_name, key), data);
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

const getData = async (table_name, get_key) => {
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

const getAllData = async (table_name, query = null) => {
    try {

        const docSnapshot = await getDocs( (query !== null) ? query : collection(database, table_name));
        
        if(docSnapshot.exists()){
            console.log("Document data:", docSnapshot.data());
            console.log("docSnapshot");
            console.log(docSnapshot);
            return docSnapshot.data();
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


export async function loginDB (userCredential, uid){
    const userInfo = await getData('users_tb', uid);
    userCredential.userDetail = userInfo;
    return userCredential;
}

export async function createUserDB(data, id){
    const processingData = await setData('users_tb', id, data);
    return processingData;
}

