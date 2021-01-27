function login(){
    password=document.getElementById("password").value;
    user_name=document.getElementById("user").value;
    password1=localStorage.getItem("user_name");
    user1=localStorage.getItem("passsword");
    k=0;
    if (user1==user_name && password==password1){
        console.log("Hi");
        window.location="index.html";
        localStorage.setItem("user_name",user_name);
    }
    else {
        document.getElementById("error").innerHTML="Incorrect password or username or register and try again";
    }
}
function register(){
    window.location="index.html";
}