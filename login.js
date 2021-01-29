function login(){
    password=document.getElementById("password").value;
    user_name=document.getElementById("user").value;
    password1=localStorage.getItem("password");
    user1=localStorage.getItem("user_name");
    k=0;
    if (user1==user_name && password==password1){
        console.log("Hi");
        window.location="Main_page.html";
        localStorage.setItem("user_name",user_name);
    }
    else {
        document.getElementById("error").innerHTML="Incorrect password or username or register and try again";
    }
}
function register(){
    window.location="index.html";
}
function pass() {
    var x = document.getElementById("password");
    if (x.type === "password") {
      x.type = "text";
    } else {
      x.type = "password";
    }
  }