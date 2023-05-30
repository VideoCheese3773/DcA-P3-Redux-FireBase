import { initializeApp } from "firebase/app";
import firebaseConfig from "../firebaseConfig";
import { Product } from "../types/products";
import { getFirestore, collection, addDoc, getDocs } from "firebase/firestore";

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const saveProductInDB = async (product: Product) => {
    try {
        await addDoc(collection(db, "products"), product);
    } catch (e) {
        console.error("Error adding document: ", e);
    }
};

const getProductsFromDB = async (): Promise<Product[]> => {
    console.log("Getting products from DB...")
    const resp: Product[] = [];
    const querySnapshot = await getDocs(collection(db, "products"));
    querySnapshot.forEach((doc) => {
        console.log(`${doc.id} => ${doc.data()}`);
        resp.push({
            ...doc.data(),
        } as Product)
    });
    return resp;
};

export default { saveProductInDB, getProductsFromDB }

