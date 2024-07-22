const number = document.getElementById("number");
const button = document.getElementById("check");
const result = document.getElementById("result");

button.addEventListener("click", () => {
    let num = parseInt(number.value);
    if (num & 1 !== 0) {
        result.innerHTML = "Odd";
    } else {
        result.innerHTML = "Even";
    }
});