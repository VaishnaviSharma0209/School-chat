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
    user_name=localStorage.getItem("user_name")
    document.getElementById("welcome").innerHTML="Welcome " + user_name + "!";
    function Addroom(){
          room_name=document.getElementById("room_name").value;
          firebase.database().ref("/").child(room_name).update({
                admin: user_name
          });
          localStorage.setItem("admin",user_name);
          localStorage.setItem("Room_Name",room_name);
          window.location="Room.html";
    }

    function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
        Room_names = childKey;
      //Start code
      console.log("Room-"+Room_names);
      row="<div class='room_name' id="+Room_names+" onclick='redirct(this.id)'>"+Room_names+" </div><hr>";
      document.getElementById("output").innerHTML+=row;
      //End code
      });});}
getData();
function redirct(name){
      console.log(name);
      localStorage.setItem("Room_Name",name);
      window.location="Room.html";
}
function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("Room_Name");
      window.location="login.html";
}