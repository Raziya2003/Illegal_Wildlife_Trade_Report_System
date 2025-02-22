
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/11.3.1/firebase-app.js";
  import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.3.1/firebase-auth.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyAfK0XgxOh4RKCnE18u-Uoi5BrZptYnFTo",
    authDomain: "wildlife-login-a7828.firebaseapp.com",
    projectId: "wildlife-login-a7828",
    storageBucket: "wildlife-login-a7828.firebasestorage.app",
    messagingSenderId: "1007095156917",
    appId: "1:1007095156917:web:85f3a88e032b901d68aefc"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

  
  const auth=getAuth(app);
  window.auth= auth;



   //submit button
   const submit = document.getElementById('regBtn');
   submit.addEventListener("click",function (event) {
   event.preventDefault();
     //inputs
    //  const username = document.getElementById('regUsername').value;
    const email = document.getElementById('regemail').value;
    const password = document.getElementById('regPassword').value;
   createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    alert("Register successfull");
    window.location.href = "login.html";
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    alert(errorMessage);
    
    // ..
  });

   
 })

