import { db } from "../main";
import { doc, getDoc } from "firebase/firestore"; 

async function getSingleStoreItem(id){
	console.log(id)
  const store = await getDoc(doc(db, "store", id))
  let storeItem = {}
  if (store.exists){
	storeItem = {id: store.id, ...store.data()}
  }
  return storeItem
}

export default getSingleStoreItem