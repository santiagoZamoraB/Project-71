import firebase from "firebase";
require("@firebase/firestore");

//Pega tu configuración de firebase aquí





firebase.initializeApp(firebaseConfig);

export default firebase.firestore();


