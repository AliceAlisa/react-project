import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyAOCq2on5d95waFFYr2a5XHKk18Fj5TNiI",
    authDomain: "gb-project1.firebaseapp.com",
    databaseURL: "https://gb-project1-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "gb-project1",
    storageBucket: "gb-project1.appspot.com",
    messagingSenderId: "1087015077209",
    appId: "1:1087015077209:web:15b2320b5ce6a300583848"
};

firebase.initializeApp(firebaseConfig);
//const app = initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const db = firebase.database();

export const chatsRef = db.ref('chats'); //chatList
export const messagesRef = db.ref('messages');
