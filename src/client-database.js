import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyAE8O_6_p9WsbGqhrvptS_utghv3ljv9pU',
  authDomain: 'to-do-49d2f.firebaseapp.com',
  databaseURL: 'https://to-do-49d2f.firebaseio.com',
  projectId: 'to-do-49d2f',
  storageBucket: 'to-do-49d2f.appspot.com',
  messagingSenderId: '419439866270',
  appId: '1:419439866270:web:c4403bd1be84e2a245668f',
  measurementId: 'G-5NB6GKSE70',
};

firebase.initializeApp(firebaseConfig);
const database = firebase.firestore();
export default database;
