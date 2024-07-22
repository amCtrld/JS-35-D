const number = document.getElementById("number");
const button = document.getElementById("check");
const result = document.getElementById("result");

button.addEventListener("click", () => {
    const num = parseInt(number.value);
    if (num % 2 === 0) {
        result.innerHTML = "Even";
    } else {
        result.innerHTML = "Odd";
    }
});