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

let avg_temp_val = document.getElementById("avg_temp_val");
let avg_hum_val = document.getElementById("avg_hum_val");
let avg_moisture_val = document.getElementById("avg_moisture_val");

let dbref = ref(db, "Sensor_data");
onValue(dbref, (snapshot) => {
  let crops = [];
  snapshot.forEach((childSnapshot) => {
    crops.push(childSnapshot.val());
    const data = snapshot.val();
    console.log(data.Humidity);
    temp_live_data.innerText = data.Temperature;
    hum_live_data.innerText = data.Humidity;
    soil_live_data.innerText = data.Moisture;
    console.log(data);

    var display_sensor_1 = document.getElementById("display-sensor-1");
    var value_1=display_sensor_1.options[display_sensor_1.selectedIndex].value;// get selected option value
    var text_1=display_sensor_1.options[display_sensor_1.selectedIndex].innerText = "Average: "+data.Temperature;

    var display_sensor_2 = document.getElementById("display-sensor-2");
    var value_2=display_sensor_2.options[display_sensor_2.selectedIndex].value;// get selected option value
    var text_2=display_sensor_2.options[display_sensor_2.selectedIndex].innerText = "Average: "+data.Moisture;

    var display_sensor_3 = document.getElementById("display-sensor-3");
    var value_3=display_sensor_3.options[display_sensor_3.selectedIndex].value;// get selected option value
    var text_3=display_sensor_3.options[display_sensor_3.selectedIndex].innerText = "Average: "+data.Humidity;

  });
});

