import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyB71MEizusuHkc-WXYY4bGsqBnDbRPz9Lk",
    authDomain: "facebook-clone-cd47b.firebaseapp.com",
    projectId: "facebook-clone-cd47b",
    storageBucket: "facebook-clone-cd47b.appspot.com",
    messagingSenderId: "226559844808",
    appId: "1:226559844808:web:570add7bcaee72da50a0fd"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export { auth, provider };
  export default db;