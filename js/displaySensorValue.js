const selectSensor = document.getElementsByClassName("select_sensor");

for (let i = 1; i > 0; i--) {
    let option = `<option value="sensor${i}" id="temp_option${i}">Sensor ${i}: ${i+30}&#8451;</option>`;
    selectSensor[0].firstElementChild.insertAdjacentHTML("afterend", option);
}

for (let i = 1; i > 0; i--) {
    let option = `<option value="sensor${i}" id="moisture_option${i}">Sensor ${i}: ${i+40}</option>`;
    selectSensor[1].firstElementChild.insertAdjacentHTML("afterend", option);
}

for (let i = 1; i > 0; i--) {
    let option = `<option value="sensor${i}" id="hum_option${i}">Sensor ${i}: ${i+800}</option>`;
    selectSensor[2].firstElementChild.insertAdjacentHTML("afterend", option);
}
