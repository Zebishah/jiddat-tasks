import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
const firebaseConfig = {
  apiKey: "AIzaSyD6wEkxK35h3ALGLTJngdj9T4e_B2qHYP8",
  authDomain: "jiddat-task.firebaseapp.com",
  projectId: "jiddat-task",
  storageBucket: "jiddat-task.appspot.com",
  messagingSenderId: "380237103772",
  appId: "1:380237103772:web:88f47c5203d21fad62a359",
  measurementId: "G-C5D2QYGNMS",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();

export const db = getFirestore(app);
export const storage = getStorage(app);
