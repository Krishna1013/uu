//YOUR FIREBASE LINKS
const firebaseConfig = {
      apiKey: "AIzaSyAnY0HabTCAdJaapGbNTENGJzHiDk4uoa4",
      authDomain: "kwiter-2c790.firebaseapp.com",
      projectId: "kwiter-2c790",
      storageBucket: "kwiter-2c790.appspot.com",
      messagingSenderId: "1050292696697",
      appId: "1:1050292696697:web:0e8c27d5c40249a3e186a8"
    };
    
    const app = initializeApp(firebaseConfig);

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code
console.log(firebase_message_id);
console.log(message_data);
name=message_data('name');
message=message_data('message');
like=message_data('like');
name_with_tag="<h4>"+name+"<img class='user_tick' src='tick.png'>";
message_with_tag="<h4 class='message_h4'>"+message+"</h4>";
like_button ="<button class='btn btn-warning' id="+firebase_message_id+" value="+like+" onclick='updateLike(this.id)'>";
span_with_tag = "<span class='glyphicon glyphicon-thumbs-up'>Like: "+ like +"</span></button><hr>";
row = name_with_tag + message_with_tag +like_button + span_with_tag;
document.getElementById("output").innerHTML+=row;
//End code
      } });  }); }
getData();
function updateLike(message_id)
{
console.log("click on like button-"+message_id);
button_id=message_id;
likes=document.getElementById(button_id).value;
updated_like=Number(likes)+1;
console.log(updated_like);
firebase.database().ref(room_name).child(message_id).update({ like : updated_likes });
}
function logout()
{
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location.replace("kwitter.html");
}
      
}