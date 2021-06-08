import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/analytics';


var firebaseConfig = {
    apiKey: "AIzaSyDWIY41dEQ3buXI5CeQOLEAVMQ7FCRHK5c",
    authDomain: "quiz-game-d11be.firebaseapp.com",
    projectId: "quiz-game-d11be",
    storageBucket: "quiz-game-d11be.appspot.com",
    messagingSenderId: "232605680812",
    appId: "1:232605680812:web:b3b0744e6e9e63b5bb0b09",
    measurementId: "G-8DBN3B6QS1"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// firebase.analytics();

export const db = firebase.firestore();