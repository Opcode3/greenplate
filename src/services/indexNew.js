import {app} from '@/configs/firebaseConfig'
import { getAuth, createUserWithEmailAndPassword, updateProfile, signInWithEmailAndPassword} from "firebase/auth";

import { loginDB, createUserDB } from './dbNew';



export async function login (email, password){
    try {
        // const userCredential = await signInWithEmailAndPassword(auth, email, password);
        console.log(email, password)
        return {password, email};
    } catch (error) {
        return error;
    }
}

export async function register(email, password, otherInformaton){
    try {
        otherInformaton.password = password
        return createUserDB(otherInformaton, email)
    } catch (error) {
        return false;
    }
}

