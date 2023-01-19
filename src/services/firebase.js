import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyDRQ19dE0DFyhP7woQxivMGRIfWGF24uqU",
  authDomain: "chatapp-cc1e8.firebaseapp.com",
  projectId: "chatapp-cc1e8",
  storageBucket: "chatapp-cc1e8.appspot.com",
  messagingSenderId: "202496884536",
  appId: "1:202496884536:web:53682b6a740f6e9be28bcd"
};

  const app = firebase.initializeApp(firebaseConfig);

  const db = app.firestore();
  const auth = app.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export { db, auth, provider };