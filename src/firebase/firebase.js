import * as firebase from "firebase";

const config = {
    apiKey: "AIzaSyDJ7I4xd_s3zQIQR2clSwPtZUXLuWkoja0",
    authDomain: "expensify-41bcf.firebaseapp.com",
    databaseURL: "https://expensify-41bcf.firebaseio.com",
    projectId: "expensify-41bcf",
    storageBucket: "expensify-41bcf.appspot.com",
    messagingSenderId: "8359470511"
  };

  firebase.initializeApp(config);

  const database=firebase.database();
  database.ref().set({
      name:"pankaj singh",
      age:24,
      isSingle:true,
      location:{
          city:"banglore",
          country:"india"
      }
  })
//   database.ref().set("this is my data")
database.ref('ag').set(44)
database.ref('age').set(55);
database.ref('location/city').set('Chennai')
database.ref('attributes').set({
    height:6.0,
    weight:70
})

console.log("data changes")