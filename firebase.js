// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDvz-0cmw6j6lJsTLQmr_4E1j0w-l-QW_Q",
    authDomain: "hackathon-d60cb.firebaseapp.com",
    projectId: "hackathon-d60cb",
    storageBucket: "hackathon-d60cb.appspot.com",
    messagingSenderId: "565360493052",
    appId: "1:565360493052:web:330d3dd554afcdd5007279",
    measurementId: "G-06YN92ER3J"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();



