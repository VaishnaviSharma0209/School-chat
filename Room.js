var firebaseConfig = {
    apiKey: "AIzaSyDHsGIb1Y2K50sItxijWJyIQtnCzL0AY9s",
    authDomain: "school-chat-87efe.firebaseapp.com",
    projectId: "school-chat-87efe",
    storageBucket: "school-chat-87efe.appspot.com",
    databaseURL: "https://school-chat-87efe-default-rtdb.firebaseio.com/",
    messagingSenderId: "517874830218",
    appId: "1:517874830218:web:885c42149917be46a1d673"
  }
  firebase.initializeApp(firebaseConfig);
    user_name=localStorage.getItem("user_name");
    room_name=localStorage.getItem("Room_Name");
    document.getElementById("welcome").innerHTML="Welcome to " + room_name + "!";
    document.getElementById("title").innerHTML="Chat with "+ room_name + ".";
    function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey == "admin") {
      admin=childData;
      console.log(admin);
    } });  }); }
    function send(){
        var isChecked=document.getElementById("box").checked;
        console.log(isChecked);
        if (isChecked==false){
            msg=document.getElementById("message").value;
            firebase.database().ref(room_name).push({
              user_name:user_name+"(Student)",
              Message:msg,
              likes:0,
              unlikes:0
        })
        document.getElementById("message").value="";
        }
        if (isChecked==true){
            msg=document.getElementById("message").value;
            firebase.database().ref(room_name).push({
              user_name:user_name+"(Teacher)",
              Message:msg,
              likes:0,
              unlikes:0
        })
        document.getElementById("message").value="";
        }
  }
  var input = document.getElementById("message");
  input.addEventListener("keyup", function(e) {
    if (e.keyCode === 13)   {
        send()
    }
})



function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "admin") {
    firebase_message_id = childKey;
    message_data = childData;
    console.log(firebase_message_id);
    console.log(message_data);
    var isChecked=document.getElementById("box").checked;
    console.log(isChecked);
    likes=message_data['likes'];
    unlikes=message_data['unlikes'];
    user=message_data['user_name'];
    message=message_data['Message'];
    admin=localStorage.getItem("admin")
    if (user.includes("(Teacher)")){
        name_tag="<h4>"+user+"<img src='https://img.icons8.com/emoji/2x/woman-teacher.png' class='user_tick'></h4>";
    }
    if(user.includes("(Student)")){
        name_tag="<h4>"+user+"<img src='https://img.icons8.com/emoji/2x/woman-student.png' class='user_tick'></h4>";
    }
    message_1="<h4 class=message_h4>"+message+"</h4>";
    like_btn="<button class='btn btn-success' id="+firebase_message_id+" onclick='update(this.id)' value="+likes+"><span class='glyphicon glyphicon-thumbs-up'> Likes:"+likes+"</span></button><br><br>";
    unlike_btn="<button class='btn btn-warning' id="+firebase_message_id+" onclick='update_down(this.id)' value="+unlikes+"><span class='glyphicon glyphicon-thumbs-down'> Unlikes:"+unlikes+"</span></button><hr>";
    row=name_tag+message_1+like_btn+unlike_btn;
    document.getElementById("output").innerHTML+=row;
    document.getElementById("admin").innerHTML="Admin-"+admin;
 } });  }); }



 getData();
 function update(message_id){
    console.log(message_id);
    like=document.getElementById(message_id).value;
    update_like=Number(like)+1;
    console.log(update_like)
    firebase.database().ref(room_name).child(message_id).update({
          likes:update_like
    });
}
function update_down(message_id1){
    console.log(message_id1);
    unlike=document.getElementById(message_id1).value;
    update_unlike=Number(unlike)+1;
    console.log(update_unlike)
    firebase.database().ref(room_name).child(message_id1).update({
          unlikes:update_like
    });
}
function logout(){
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location.replace("login.html");
}
function back(){
    window.location="Main_page.html";
}
function invite(){
    window.open("https://www.whatsapp.com/")
}
var mybutton = document.getElementById("myBtn");
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
