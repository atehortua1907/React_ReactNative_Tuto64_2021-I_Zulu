import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDpCJcnUUa1MywvE70IaersSSlpZCYD9e4",
    authDomain: "restaurantsreactnativezulu.firebaseapp.com",
    projectId: "restaurantsreactnativezulu",
    storageBucket: "restaurantsreactnativezulu.appspot.com",
    messagingSenderId: "452452254393",
    appId: "1:452452254393:web:44dd1d1e42015ecf4ed168"
  };

  export const firebaseApp = firebase.initializeApp(firebaseConfig);