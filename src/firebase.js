import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyD9n8QD-Z1JUAVl1PdJgonluL-B-GNCsCc",
    authDomain: "eshop-b03aa.firebaseapp.com",
    projectId: "eshop-b03aa",
    storageBucket: "eshop-b03aa.appspot.com",
    messagingSenderId: "416861704968",
    appId: "1:416861704968:web:9744fbd7330cfe14cfd2bd",
    measurementId: "G-4SLRJ820N0"
  };


const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

const auth = firebase.auth();

export { db, auth };
