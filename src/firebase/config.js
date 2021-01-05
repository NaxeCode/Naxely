import * as firebase from 'firebase';
import '@firebase/auth';
import '@firebase/firestore';

const firebaseConfig = {
    apiKey: "Key here",
    authDomain: "Domain here",
    databaseURL: "DB url here",
    projectId: "Proj ID here",
    storageBucket: "storage bucket here",
    messagingSenderId: "messaging id here",
    appId: "App ID here 1::web:",
    measurementId: "Measurement ID here"
};

firebase.initializeApp(firebaseConfig);

export { firebase };