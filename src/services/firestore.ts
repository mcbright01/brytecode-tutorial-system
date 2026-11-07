import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDoc,
  getDocs,
  updateDoc,
  type DocumentData,
  type UpdateData,
} from "firebase/firestore";
import { getFirebaseServices } from "@/config/firebase";

export async function createRecord<T extends DocumentData>(collectionName: string, data: T) {
  const { db } = getFirebaseServices();
  const reference = await addDoc(collection(db, collectionName), data);
  return reference.id;
}

export async function getRecord<T extends DocumentData>(collectionName: string, id: string) {
  const { db } = getFirebaseServices();
  const snapshot = await getDoc(doc(db, collectionName, id));
  return snapshot.exists() ? ({ id: snapshot.id, ...snapshot.data() } as T & { id: string }) : null;
}

export async function listRecords<T extends DocumentData>(collectionName: string) {
  const { db } = getFirebaseServices();
  const snapshot = await getDocs(collection(db, collectionName));
  return snapshot.docs.map((item) => ({ id: item.id, ...item.data() }) as T & { id: string });
}

export async function updateRecord<T extends DocumentData>(
  collectionName: string,
  id: string,
  data: UpdateData<T>,
) {
  const { db } = getFirebaseServices();
  await updateDoc(doc(db, collectionName, id), data);
}

export async function deleteRecord(collectionName: string, id: string) {
  const { db } = getFirebaseServices();
  await deleteDoc(doc(db, collectionName, id));
}
