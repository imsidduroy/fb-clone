import firebase from 'firebase'

const firebaseConfig = {
  apiKey: "AIzaSyD0TdQlV7BOJaDFSI_XxnxsQLDxYGKjkl8",
  authDomain: "fb-clone-99b72.firebaseapp.com",
  projectId: "fb-clone-99b72",
  storageBucket: "fb-clone-99b72.appspot.com",
  messagingSenderId: "969790041844",
  appId: "1:969790041844:web:adb0e15bb670a984b5f8a1",
};
 
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export {auth, provider};
export default db;
