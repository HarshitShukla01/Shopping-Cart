import React from "react";
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import g1 from './g1.png'
const Loginpage = () => {
  var firebaseConfig = {
    apiKey: "AIzaSyCJbJHqDqlQ0QnE0D8N7SV9cimXyyQZAbY",
    authDomain: "kyunshop-shopping.firebaseapp.com",
    projectId: "kyunshop-shopping",
    storageBucket: "kyunshop-shopping.appspot.com",
    messagingSenderId: "859624069757",
    appId: "1:859624069757:web:750319559f999ed9f26f14",
  };

  firebase.initializeApp(firebaseConfig);
  const app = firebase.app();

  const googleLogin = async () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    const result = await firebase.auth().signInWithPopup(provider);
    const user = result.user;
    console.log(user.displayName);
    const entry = 1;
    localStorage.setItem("getentry", JSON.stringify(entry));
    window.location.reload();
  };
  return (
    <div className="loginpage_container">
      <h1 className="h1google">Welcome to Kyunshop</h1>
      <img src={g1}/>
      <button className="googlebutton" onClick={googleLogin}>Login with Google</button>
    </div>
  );
};

export default Loginpage;
