
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getFirestore, collection, getDocs, getDoc, doc } from "firebase/firestore/lite"

const firebaseConfig = {
  apiKey: "AIzaSyAAcF5h_9nQov3OW0xRbKCYAdNr04I79BU",
  authDomain: "smart-groceries-app.firebaseapp.com",
  projectId: "smart-groceries-app",
  storageBucket: "smart-groceries-app.appspot.com",
  messagingSenderId: "827605699364",
  appId: "1:827605699364:web:857c3e16af5c9451f941b1",
  measurementId: "G-56HLVXWG1V"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app)

const itemCollectionRef = collection(db, "Items")

export async function getItems(){
    const snapshot = await getDocs(itemCollectionRef)
    const items= snapshot.docs.map(doc=>({
        ...doc.data(),
        id:doc.id
    }))
    return items[0]
}



