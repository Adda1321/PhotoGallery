import firebase from 'firebase/compat/app';
import 'firebase/compat/storage';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyD8rnduqWonwRyXTEREnJyshjz6j8NfBIQ",
    authDomain: "reactgallery-618f9.firebaseapp.com",
    projectId: "reactgallery-618f9",
    storageBucket: "reactgallery-618f9.appspot.com",
    messagingSenderId: "1009662862479",
    appId: "1:1009662862479:web:2f005c2bed1bf31df9fcfa"
};

firebase.initializeApp(firebaseConfig);

const projectstorage = firebase.storage();
const projectfirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;
export  {projectstorage,projectfirestore,timestamp};

export default firebase;