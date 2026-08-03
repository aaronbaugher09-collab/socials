import { initializeApp } from "https://www.gstatic.com/firebasejs/12.1.0/firebase-app.js";
import {
    getAuth
} from "https://www.gstatic.com/firebasejs/12.1.0/firebase-auth.js";

import {
    getFirestore
} from "https://www.gstatic.com/firebasejs/12.1.0/firebase-firestore.js";

const firebaseConfig = {

    apiKey: "AIzaSyDillpGyGbEFw08XN8f1Ggv84qyVklf4QA",

    authDomain: "miss-ashlyn-s-sitter-services.firebaseapp.com",

    projectId: "miss-ashlyn-s-sitter-services",

    storageBucket: "miss-ashlyn-s-sitter-services.firebasestorage.app",

    messagingSenderId: "620608118672",

    appId: "1:620608118672:web:54848933345a8ec5245d15"

};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export const db = getFirestore(app);
