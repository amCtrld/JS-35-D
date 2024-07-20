const principalGiven = document.getElementById("principal");
const rateGiven = document.getElementById("rate");
const timeGiven = document.getElementById("time");
const calcResult = document.getElementById("calculate");

const result = document.getElementById("result");

calcResult.addEventListener("click", () => {
    // Get values from input fields and convert to numbers
    const principal = parseFloat(principalGiven.value);
    const rate = parseFloat(rateGiven.value);
    const time = parseFloat(timeGiven.value);

    const interest = (principal * rate * time) / 100;
    const total = principal + interest;


    result.textContent = `Simple Interest is ${interest.toFixed(2)} and total payable is ${total.toFixed(2)}`;
});
