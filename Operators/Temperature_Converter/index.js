const convertTemp = document.getElementById("convertTemp");
const takeTempInput = document.getElementById("takeTemp");
const conversionTypeSelect = document.getElementById("conversionType");
const resultDiv = document.getElementById("result");

convertTemp.addEventListener("click", () => {
  const tempValue = parseFloat(takeTempInput.value);
  const selectedConversion = conversionTypeSelect.value;

  let convertedTemp;

  if (selectedConversion === "CtoF") {
    convertedTemp = (tempValue * 9) / 5 + 32;
  } else if (selectedConversion === "FtoC") {
    convertedTemp = ((tempValue - 32) * 5) / 9;
  }

  resultDiv.textContent = `${tempValue} ${selectedConversion.slice(
    0,
    1
  )} is equal to ${convertedTemp.toFixed(2)} ${selectedConversion.slice(2, 3)}`;
});
