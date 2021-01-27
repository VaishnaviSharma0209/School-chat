function login(){
    window.location="login.html";
}
function register(){
    pass1=document.getElementById("password").value;
    pass2=document.getElementById("con_password").value;
    user=document.getElementById("user").value;
    var j=0;
    if (pass1==pass2){
        j=j+1;
    }
    else{
        document.getElementById("error").innerHTML="Please write the same password";
    }
    if (user==""){
        document.getElementById("error").innerHTML="Please type username";
    }
    if (j==1&&user!=""){
        localStorage.setItem("user_name",user);
        localStorage.setItem("password",pass1);
        window.location="login.html";
    }
}