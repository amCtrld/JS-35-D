const readTemp = document.getElementById("takeTemp");
const sendTemp = document.getElementById("convertTemp");
const postTemp = document.getElementById("result");


sendTemp.addEventListener("click", () => {
    let tempValue = readTemp.value;
    tempValue = parseInt(tempValue);
    const fahrenheit = (tempValue * 9/2) + 35;
    postTemp.textContent = fahrenheit;
});