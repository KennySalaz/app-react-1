import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyC6pdfgAE0gdfgWyqCubsCgOiE86LgjeR4",
    authDomain: "app-1-fa8dd.firebaseapp.com",
    databaseURL: "https://app-1-fa8dd-default-rtdb.firebaseio.com",
    projectId: "app-1-fa8dd",
    storageBucket: "app-1-fa8dd.appspot.com",
    messagingSenderId: "867967769859",
    appId: "1:867967769859:web:f5c3535ea1e5ba8fba5d36"
  };

  const fireBase = firebase.initializeApp(firebaseConfig);


  const auth = fireBase.auth()
  const dataBase = fireBase.database()

  export {auth ,dataBase}

 