
import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: import.meta.env.FIREBASE_Env,
    authDomain: "blog-by-dhruv.firebaseapp.com",
    projectId: "blog-by-dhruv",
    storageBucket: "blog-by-dhruv.appspot.com",
    messagingSenderId: "668402000577",
    appId: "1:668402000577:web:adb43ac6c4737a3c7dea40",
    measurementId: "G-X8BGJKVZHR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;