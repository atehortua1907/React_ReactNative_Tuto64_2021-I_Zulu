import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDz4kHKP9vKF7UjpG4gskBroJ8eet4AlAo",
    authDomain: "react-zulu.firebaseapp.com",
    projectId: "react-zulu",
    storageBucket: "react-zulu.appspot.com",
    messagingSenderId: "43983555486",
    appId: "1:43983555486:web:6ca065e29457b8d399e48f",
    measurementId: "G-2FWSQ44FME"
};

export const firebaseApp = firebase.initializeApp(firebaseConfig);