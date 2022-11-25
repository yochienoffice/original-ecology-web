import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './app'
import firebase from 'firebase/compat/app';
import { FirebaseConfig } from "./config/config";

export function initialFirebase(){
  console.log("Firebase: " + firebase.apps.length);
  if(!firebase.apps.length){
    firebase.initializeApp(FirebaseConfig);
  }
}

initialFirebase();
const root = ReactDOM.createRoot(
  document.getElementById('root')
);

root.render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>
);