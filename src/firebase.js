import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const firebaseConfig = {
  apiKey: "AIzaSyAe6FVWmL5nBy5IVWGWCYwzcLDb91XjpzU",
  authDomain: "amaz-on-clone-ha.firebaseapp.com",
  projectId: "amaz-on-clone-ha",
  storageBucket: "amaz-on-clone-ha.appspot.com",
  messagingSenderId: "959175896716",
  appId: "1:959175896716:web:d4792b0b23ce5324f515a9",
  measurementId: "G-6ZJN01WY59",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebaseApp.auth();

export { db, auth };
