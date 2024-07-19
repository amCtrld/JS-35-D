function convertTemp() {
    const readTemp = document.getElementById("takeTemp");
    const postTemp = document.getElementById("result");
  
    // Get the value from the input field (it's a string)
    let tempValue = readTemp.value;
  
    // Convert the string to an integer
    tempValue = parseInt(tempValue);
  
    // Now you can use tempValue in your calculation
    const fahrenheit = tempValue * (9/5) + 32; 
  
    // Display the result
    postTemp.textContent = "The temperature is " + fahrenheit; 
  }
  

// Get the button element
const convertButton = document.getElementById("convertButton"); // Assuming you have a button with this ID

// Add an event listener to the button
convertButton.addEventListener("click", convertTemp); 