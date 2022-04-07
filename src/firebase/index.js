// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore, collection, query, where, getDocs,getDoc,doc,addDoc} from "firebase/firestore/lite";

const firebaseConfig = {
  apiKey: "AIzaSyCSZLrAd1sphVtY4cdj3fHtAAvtkQXK0Yk",
  authDomain: "diazdeheza-app.firebaseapp.com",
  projectId: "diazdeheza-app",
  storageBucket: "diazdeheza-app.appspot.com",
  messagingSenderId: "372869727440",
  appId: "1:372869727440:web:995041f234d0905e410ad5",
  measurementId: "G-JT0ZP2L555"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const analytics = getAnalytics(app);
export const db = getFirestore(app)

export async function getallBooks () {
    const miColec = collection(db,"books" )
    const booksSnap = await getDocs(miColec);

    const result = booksSnap.docs.map ( item => {
        return {...item.data(),id: item.id}
    })
    return result
}

export async function getAllBooksFrom(category){
    const miColec = collection(db,"books");
    const myquery = query(miColec,where("gender","==",category))

    const booksSnap = await getDocs(myquery)


    const result = booksSnap.docs.map ( item => {
        return {...item.data(),id: item.id}
    })
    return result
}


export async function getBook(id) {
    const miColec = collection(db,"books")
    const docref = doc(miColec, id)

    const resultDoc = await getDoc(docref)
     return{ ...resultDoc.data(), id: resultDoc.id}
}