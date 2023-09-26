import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc, getDocs, doc, getDoc, query, where, setDoc, deleteDoc } from "firebase/firestore";


const firebaseConfig = {
    apiKey: "AIzaSyCUoO2jhP9pd0HTbdvm_hEQonts6ojM5Bs",
    authDomain: "precodata-lectoras.firebaseapp.com",
    databaseURL: "https://precodata-lectoras-default-rtdb.firebaseio.com",
    projectId: "precodata-lectoras",
    storageBucket: "precodata-lectoras.appspot.com",
    messagingSenderId: "721706305943",
    appId: "1:721706305943:web:ad03e7502b0ddf50349cd2",
    measurementId: "G-RTKYE1E72Z"
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)


export async function addScanner(scanner) {
    try {

        const docRef = collection(db, 'scanners');
        const res = await addDoc(docRef, scanner)
        return res
    }
    catch (error) {
        console.error(error)
    }
}
