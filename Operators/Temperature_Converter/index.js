const readTempInC = document.getElementById("takeTempInC");
const sendTempInC = document.getElementById("convertTempToF");
const postTempInF = document.getElementById("resultInF");

const readTempInF = document.getElementById("takeTempInF");
const sendTempInF = document.getElementById("convertTempToC");
const postTempInC = document.getElementById("resultInC");


sendTempInC.addEventListener("click", () => {
    let tempValue = readTempInC.value;
    tempValue = parseInt(tempValue);
    const fahrenheit = (tempValue * 9/5) + 32;
    postTempInF.textContent = fahrenheit;
});

sendTempInF.addEventListener("click", () => {
    let tempValue = readTempInF.value;
    tempValue = parseInt(tempValue);
    const celcius = (tempValue - 32) * 5/9;
    postTempInC.textContent = celcius;
});