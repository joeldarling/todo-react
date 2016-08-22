import firebase from 'firebase';

try {
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyA_5S4tJ51w95YJdmuXLdZ9QQscYB0hBl8",
    authDomain: "darling-todo-app.firebaseapp.com",
    databaseURL: "https://darling-todo-app.firebaseio.com",
    storageBucket: "darling-todo-app.appspot.com",
  };

  firebase.initializeApp(config);
} catch(e){
  console.log('firebase error:', e);
}
export const firebaseRef = firebase.database().ref();
export default firebase;
