const principalGiven = document.getElementById("principal");
const rateGiven = document.getElementById("rate");
const timeGiven = document.getElementById("time");
const calcResult = document.getElementById("calculate");

const simpleInterest = document.getElementById("simpleInterest");
const totalPayable = document.getElementById("totalPayable");


calcResult.addEventListener("click", () => {
    // Get values from input fields and convert to numbers
    const principal = parseFloat(principalGiven.value);
    const rate = parseFloat(rateGiven.value);
    const time = parseFloat(timeGiven.value);

    const interest = (principal * rate * time) / 100;
    const total = principal + interest;


    simpleInterest.textContent = `Simple Interest is ${interest.toFixed(2)}`;
    totalPayable.textContent = `Total payable is ${total.toFixed(2)}`;
});
