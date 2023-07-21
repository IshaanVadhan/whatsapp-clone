import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyCntlbHOXIdbGCI_69KvCwxRXhetmSR9PA",
    authDomain: "whatsapp-clone-2efed.firebaseapp.com",
    projectId: "whatsapp-clone-2efed",
    storageBucket: "whatsapp-clone-2efed.appspot.com",
    messagingSenderId: "108479719460",
    appId: "1:108479719460:web:fb0009128e0f33ba6e10b1",
    measurementId: "G-LV93WY3S45"
};

const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app);