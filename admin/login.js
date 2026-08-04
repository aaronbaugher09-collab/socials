import { auth } from "../firebase.js";

import {

    signInWithEmailAndPassword

} from "https://www.gstatic.com/firebasejs/12.1.0/firebase-auth.js";

const loginButton = document.getElementById("loginButton");

loginButton.addEventListener("click", login);

async function login(){

    const email = document.getElementById("email").value;

    const password = document.getElementById("password").value;

    const error = document.getElementById("error");

    error.textContent = "";

    try{

        await signInWithEmailAndPassword(
            auth,
            email,
            password
        );

        window.location.href="dashboard.html";

    }

    catch(e){

        error.textContent=e.message;

    }

}
