const userNumber = document.getElementById("userNo");
const factorialButton = document.getElementById("factor");
const result = document.getElementById("result");

factorialButton.addEventListener("click", () => {
  const n = parseInt(userNumber.value); 
  if (n < 0) {
    result.textContent = "Factorial is not defined for negative numbers.";
  } else if (n === 0) {
    result.textContent = "The factorial of 0 is 1.";
  } else {
    let factorialResult = 1;
    for (let i = 2; i <= n; i++) {
      factorialResult *= i;
    }
    result.textContent = `The factorial of ${n} is ${factorialResult}.`;
  }
});
