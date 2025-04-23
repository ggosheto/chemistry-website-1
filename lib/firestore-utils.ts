// Utility to fetch data from a Firestore collection
import { collection, getDocs } from "firebase/firestore";
import { db } from "./firebase";

export async function fetchCollection(collectionName: string) {
  const colRef = collection(db, collectionName);
  const snapshot = await getDocs(colRef);
  return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
}
