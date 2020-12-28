// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyCzjMJYtF-q8_cHy6Rok8n_z6niSJWnxnA",
    authDomain: "whatsapp-clone-25278.firebaseapp.com",
    projectId: "whatsapp-clone-25278",
    storageBucket: "whatsapp-clone-25278.appspot.com",
    messagingSenderId: "530465258912",
    appId: "1:530465258912:web:a3322d1b20ef00ce4ef8c5",
    measurementId: "G-TZ2WC9G6PL"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig) 

const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export {auth,provider};
export default db;  