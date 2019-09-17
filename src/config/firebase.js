import firebase from 'firebase'

 const firebaseConfig = {
    apiKey: "AIzaSyAa53UPS2A-7wZLLXdsP8I6zox6G4uReOE",
    authDomain: "fir-tutorial-3b2a1.firebaseapp.com",
    databaseURL: "https://fir-tutorial-3b2a1.firebaseio.com",
    projectId: "fir-tutorial-3b2a1",
    storageBucket: "",
    messagingSenderId: "88965238904",
    appId: "1:88965238904:web:76b1acb264cb2c5d469d8d"
  };
 
 const fire= firebase.initializeApp(firebaseConfig);
 export default fire