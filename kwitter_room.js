var firebaseConfig = {
      apiKey: "AIzaSyB04R3cIpd267hZbrxIgAozS7U1Eo5NvpU",
      authDomain: "kwitter-54cc9.firebaseapp.com",
      projectId: "kwitter-54cc9",
      storageBucket: "kwitter-54cc9.appspot.com",
      messagingSenderId: "505446377706",
      appId: "1:505446377706:web:0c7c069e7658298c1ecf93",
      measurementId: "G-BLV3EH3ZPF"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    firebase.analytics();
//ADD YOUR FIREBASE LINKS HERE

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
