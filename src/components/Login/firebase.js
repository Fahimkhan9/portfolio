import firebase from "firebase"
const firebaseConfig = {
    apiKey: "AIzaSyBGhWUGdYvGK7O0_Y-OxmBRwNYUcGEqyIc",
    authDomain: "facebook-clone-f244e.firebaseapp.com",
    databaseURL: "https://facebook-clone-f244e.firebaseio.com",
    projectId: "facebook-clone-f244e",
    storageBucket: "facebook-clone-f244e.appspot.com",
    messagingSenderId: "22603520783",
    appId: "1:22603520783:web:dbcd4d08886ead3bd9bc7a",
    measurementId: "G-PQDPFR3CR0"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig)

  const auth = firebaseApp.auth()

const provider = new firebase.auth.GoogleAuthProvider();


  export default auth
  export {provider}