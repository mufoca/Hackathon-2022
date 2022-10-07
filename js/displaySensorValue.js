
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

let avg_temp_val = document.getElementById("avg_temp_val");
let avg_hum_val = document.getElementById("avg_hum_val");
let avg_moisture_val = document.getElementById("avg_moisture_val");

const selectSensor = document.getElementsByClassName("select_sensor");

let dbref = ref(db, "Sensor_data");
onValue(dbref, (snapshot) => {
  let crops = [];
//   snapshot.forEach((childSnapshot) => {
//     crops.push(childSnapshot.val());
//     const data = snapshot.val();
//     // console.log(data);
        
    for (let i = 1; i > 0; i--) {
        let option = `<option value="${snapshot.val().Temperature}" id="temp_option${i}">Sensor ${i} Zone ${i}: ${snapshot.val().Temperature} &#8451;</option>`;
        selectSensor[0].firstElementChild.insertAdjacentHTML("afterend", option);
    }

    for (let i = 1; i > 0; i--) {
        let option = `<option value="${snapshot.val().Moisture}" id="moisture_option${i}">Sensor ${i} Zone ${i}: ${snapshot.val().Moisture}</option>`;
        selectSensor[1].firstElementChild.insertAdjacentHTML("afterend", option);
    }

    for (let i = 1; i > 0; i--) {
        let option = `<option value="${snapshot.val().Humidity}" id="hum_option${i}">Sensor ${i} Zone ${i}: ${snapshot.val().Humidity}</option>`;
        selectSensor[2].firstElementChild.insertAdjacentHTML("afterend", option);
    }

//   });
});

let set_sensor_value_1 = document.getElementById("display-sensor-1");
let set_sensor_value_2 = document.getElementById("display-sensor-2");
let set_sensor_value_3 = document.getElementById("display-sensor-3");

let temp_live_data = document.getElementById("temp_live_data");
let hum_live_data = document.getElementById("hum_live_data");
let soil_live_data = document.getElementById("soil_live_data");

set_sensor_value_1.addEventListener("change",(e)=>{
    console.log(set_sensor_value_1.value);
    temp_live_data.innerText = set_sensor_value_1.value;
})

set_sensor_value_2.addEventListener("change",(e)=>{
    console.log(set_sensor_value_2.value);
    soil_live_data.innerText = set_sensor_value_2.value;
})

set_sensor_value_3.addEventListener("change",(e)=>{
    console.log(set_sensor_value_3.value);
    hum_live_data.innerText = set_sensor_value_3.value;
})
