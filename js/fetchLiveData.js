import { initializeApp } from "https://www.gstatic.com/firebasejs/9.9.3/firebase-app.js";
import {
  getDatabase,
  ref,
  onValue,
  push,
  set,
  update,
} from "https://www.gstatic.com/firebasejs/9.9.3/firebase-database.js";

const firebaseConfig = {
  apiKey: "AIzaSyCd-ZXpym75WVSQp9_mTzlTmt2_4ptJtGs",
  authDomain: "hackathon-2022-81f7b.firebaseapp.com",
  databaseURL: "https://hackathon-2022-81f7b-default-rtdb.firebaseio.com",
  projectId: "hackathon-2022-81f7b",
  storageBucket: "hackathon-2022-81f7b.appspot.com",
  messagingSenderId: "466349206375",
  appId: "1:466349206375:web:3fa656e4ebfe8c79181dc2",
  databaseURL: "https://hackathon-2022-81f7b-default-rtdb.firebaseio.com",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

let temp_live_data = document.getElementById("temp_live_data");
let hum_live_data = document.getElementById("hum_live_data");
let soil_live_data = document.getElementById("soil_live_data");

let dbref = ref(db, "Sensor_data");
onValue(dbref, (snapshot) => {
  let crops = [];
  snapshot.forEach((childSnapshot) => {
    crops.push(childSnapshot.val());
    const data = snapshot.val();
    temp_live_data.innerText = data.Temperature;
    hum_live_data.innerText = data.Humidity;
    soil_live_data.innerText = data.Moisture;
    // console.log(data);
  });
});

