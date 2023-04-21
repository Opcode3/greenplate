import {app} from '@/configs/firebaseConfig'
import { getAuth, createUserWithEmailAndPassword, updateProfile, signInWithEmailAndPassword} from "firebase/auth";



const auth = getAuth(app);

export async function login (email, password){
    try {
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        return userCredential;
    } catch (error) {
        return error;
    }
}

export async function register(email, password, otherInformaton){
    try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        const updateUserCredential = await updateProfile(userCredential.user, { displayName: otherInformaton.role})
        return true;
    } catch (error) {
        return false;
    }
}

