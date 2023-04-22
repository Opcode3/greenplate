import {app} from '@/configs/firebaseConfig'
import { getAuth, createUserWithEmailAndPassword, updateProfile, signInWithEmailAndPassword} from "firebase/auth";

import { loginDB, createUserDB } from './db';

const auth = getAuth(app);

export async function login (email, password){
    try {
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        console.log(userCredential)
        return loginDB(userCredential, userCredential.user.uid);
    } catch (error) {
        console.error('Error')
        return error;
    }
}

export async function register(email, password, otherInformaton){
    try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        const updateUserCredential = await updateProfile(userCredential.user, { displayName: otherInformaton.role})
        return createUserDB(otherInformaton, userCredential.user.uid)
    } catch (error) {
        return false;
    }
}

