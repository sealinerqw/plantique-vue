import { db } from "../main";
import { collection, getDocs } from "firebase/firestore"; 

async function getStoreItems(){
  const store = await getDocs(collection(db, "store"))
  store.forEach((doc) => {
    console.log(doc.id, " => ", doc.data());
  });
}

export default getStoreItems