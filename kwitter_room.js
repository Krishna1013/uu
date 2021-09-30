
//ADD YOUR FIREBASE LINKS HERE

const firebaseConfig = {
      apiKey: "AIzaSyAnY0HabTCAdJaapGbNTENGJzHiDk4uoa4",
      authDomain: "kwiter-2c790.firebaseapp.com",
      projectId: "kwiter-2c790",
      storageBucket: "kwiter-2c790.appspot.com",
      messagingSenderId: "1050292696697",
      appId: "1:1050292696697:web:0e8c27d5c40249a3e186a8"
    };
    
    const app = initializeApp(firebaseConfig);
    user_name = localStorage.getItem("user_name");
    document.getElementById("user_name").innerHTML = "welcome sus "+user_name+"!";

    function addroom()
    {
          room_name = document.getElementById("room_name").value;
          firebase.database().ref("/").child(room_name).update({
          purpose:"adding room name"
          });
          localStorage.setItem("room_name",room_name);
          window.location ="kwitter_page.html";
    }
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;

      //Start code
      console.log("Room name-"+Room_names);
      

      //End code
      });});}
getData();
function redirectoroomname(name)
{
console.log(name);
localStorage.setItem("room_name",name);
window.location="kwitter_page.html";
}
function logout()
{
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location="kwitter.html";
}