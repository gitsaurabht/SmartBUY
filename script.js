const a = document.querySelector("#login-form");

a.addEventListener("submit", function(event){
    console.log("button clicked")
     event.preventDefault();
     const password =document.querySelector(".password").value;
     const email =document.querySelector(".email").value;

     const user_email ="123@gmail.com";
     const user_password ="123";

     if(email==user_email && password==user_password){
          console.log("passed");
          window.location.href = "main_page.html";
     }
     else{
        console.log("Error");
     }

})