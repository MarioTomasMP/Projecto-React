import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs, doc, getDoc } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyCv0hWL2D-_1IBzbOm6BKh2PwWfFM0FnUw",
  authDomain: "market-geek.firebaseapp.com",
  projectId: "market-geek",
  storageBucket: "market-geek.appspot.com",
  messagingSenderId: "554443832848",
  appId: "1:554443832848:web:aa2a800c78142e662c1495"
};

const app = initializeApp(firebaseConfig);
const database = getFirestore(app)

export async function loadProducts(){
    const productsCollection = collection(database, "novedades")
    let snapshotDB = await getDocs(productsCollection);
    let dataDocs = snapshotDB.docs.map(document => {
        let docProps = {...document.data(),id: document.id}
        return docProps
    })


    return dataDocs;
}

export async function loadSingleProduct(idParams){
    const docRef = doc(database, "ropa", idParams);
    const docSnapshot = await getDoc(docRef);


    return {...docSnapshot.data(), id: docSnapshot.id};
}

export async function loadProductsForCategory(){
    let categories = ["ropa", "bazar", "accesorios"]
    const productsCollection = collection(database, "ropa")
    let snapshotDB = await getDocs(productsCollection);
    let dataDocs = snapshotDB.docs.map(document => {
        let docProps = {...document.data(),id: document.id}
        return docProps
    })


    return dataDocs;
}

export default app;
export { database};