import firebase from 'firebase';

// Initialize Firebase
var config = {
  apiKey: "AIzaSyA_5S4tJ51w95YJdmuXLdZ9QQscYB0hBl8",
  authDomain: "darling-todo-app.firebaseapp.com",
  databaseURL: "https://darling-todo-app.firebaseio.com",
  storageBucket: "darling-todo-app.appspot.com",
};
firebase.initializeApp(config);
const firebaseRef = firebase.database().ref()

// firebaseRef.child('app').once('value')
// .then((snapshot)=>{
//   console.log('db contents:', snapshot.key, snapshot.val());
// })
// .catch((e)=>{
//   console.log(e);
// });

firebaseRef.child('user').on('value', (snapshot)=>{
  console.log('user info updated', snapshot.val());
});

firebaseRef.child('user').update({name: 'Jody'});
firebaseRef.child('user').update({age: 12});

firebaseRef.child('app').update({app: 'smithy'})
