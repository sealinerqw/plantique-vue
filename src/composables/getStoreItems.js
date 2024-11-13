import { db } from "../main";
import { collection, getDocs } from "firebase/firestore"; 

async function getStoreItems(){
  const store = await getDocs(collection(db, "store"))
  const storeItems = []
  store.forEach((doc) => {
    storeItems.push({id: doc.id, ...doc.data()})
    // console.log(doc.id, " => ", doc.data());
  });
  return storeItems
}

export default getStoreItems