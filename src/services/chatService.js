import { db } from "./firebase";
import {
  collection,
  addDoc,
  query,
  orderBy,
  onSnapshot,
  serverTimestamp
} from "firebase/firestore";

export const sendMessage = async (chatId, sender, text) => {
  await addDoc(collection(db, "chats", chatId, "messages"), {
    sender,
    text,
    timestamp: serverTimestamp()
  });
};

export const getMessages = (chatId, callback) => {
  const q = query(
    collection(db, "chats", chatId, "messages"),
    orderBy("timestamp")
  );

  return onSnapshot(q, snapshot => {
    callback(snapshot.docs.map(doc => doc.data()));
  });
};
