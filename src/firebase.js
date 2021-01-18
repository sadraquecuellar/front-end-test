import firebase from 'firebase'

var firebaseConfig = {
  apiKey: "AIzaSyCrJ3laeEbBP2ktP3oRKij547eXATVoxGU",
  authDomain: "react-teste-front.firebaseapp.com",
  databaseURL: "https://react-teste-front-default-rtdb.firebaseio.com",
  projectId: "react-teste-front",
  storageBucket: "react-teste-front.appspot.com",
  messagingSenderId: "553988038952",
  appId: "1:553988038952:web:2b85092ec9b40b5f2b701d"
};
// Initialize Firebase
const fireDB = firebase.initializeApp(firebaseConfig);

export default fireDB.database().ref();