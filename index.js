let express = require('express')

const app =express()
app.use(express.json())


// var FCM = require('fcm-node');
// var serverKey = 'YOURSERVERKEYHERE'; //put your server key here
// var fcm = new FCM(serverKey);

// var message = { //this may vary according to the message type (single recipient, multicast, topic, et cetera)
//     to: 'registration_token', 
//     collapse_key: 'your_collapse_key',
    
//     notification: {
//         title: 'Title of your push notification', 
//         body: 'Body of your push notification' 
//     },
    
//     data: {  //you can send only notification or only data(or include both)
//         my_key: 'my value',
//         my_another_key: 'my another value'
//     }
// };

// fcm.send(message, function(err, response){
//     if (err) {
//         console.log("Something has gone wrong!");
//     } else {
//         console.log("Successfully sent with response: ", response);
//     }
// });

app.use('/app',require('./routes/api/notifications'))







app.listen(process.env.PORT || 3000,()=>{
    console.log(`server is listing on ${process.env.PORT || 3000 }`)
})


// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyC4fn4_ni9fmAlhN8bpRa3zCUY32QK5Dkk",
//   authDomain: "notificactions-aa0ef.firebaseapp.com",
//   projectId: "notificactions-aa0ef",
//   storageBucket: "notificactions-aa0ef.appspot.com",
//   messagingSenderId: "685043696676",
//   appId: "1:685043696676:web:42b373822adbab10c104b1",
//   measurementId: "G-FV2D27RGXN"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);