import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyBpydv9AUsrXVpUBMpFi_sIByLFtLK8qX8",
    authDomain: "react-app-curso-9fc69.firebaseapp.com",
    projectId: "react-app-curso-9fc69",
    storageBucket: "react-app-curso-9fc69.appspot.com",
    messagingSenderId: "117457081146",
    appId: "1:117457081146:web:46d0cffaa88201f8707603"
};
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db= firebase.firestore();
const googleAuthprovider= new firebase.auth.GoogleAuthProvider();

export{
    db,
    googleAuthprovider,
    firebase
}