// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDhtLAx-S-yuFVYd3gycAwY4P_1fkL4QgA",
  authDomain: "genius-car-service-436d3.firebaseapp.com",
  projectId: "genius-car-service-436d3",
  storageBucket: "genius-car-service-436d3.appspot.com",
  messagingSenderId: "344689990956",
  appId: "1:344689990956:web:1075584d265b0378176089"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
