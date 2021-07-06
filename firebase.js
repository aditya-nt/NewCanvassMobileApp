import firebase from "firebase/app"
import "firebase/database";


const firebaseConfig = {
    apiKey: "AIzaSyBETL7WygoQOSVm3hChGFJTGmXbkoqPiEQ",
    authDomain: "newscanvassapp.firebaseapp.com",
    databaseURL: "https://newscanvassapp-default-rtdb.firebaseio.com",
    projectId: "newscanvassapp",
    storageBucket: "newscanvassapp.appspot.com",
    messagingSenderId: "7301069810",
    appId: "1:7301069810:web:f95e8bb305bec35e42496b"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);


const rdb = firebase.database()

export { rdb }