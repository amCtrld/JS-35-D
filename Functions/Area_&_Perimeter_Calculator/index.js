const length = document.getElementById('length');
const width = document.getElementById('width');
const calculate = document.getElementById('calculate');
const area = document.getElementById('area');
const perimeter = document.getElementById('perimeter');

calculate.addEventListener('click', function () {
    const len = parseInt(length.value);
    const wid = parseInt(width.value);

    // Error Handling: Check if len and wid are valid numbers
    if (!isNaN(len) && !isNaN(wid)) {
        area.innerHTML = "Area: " + len * wid;
        perimeter.innerHTML = "Perimeter: " + 2 * (len + wid);
    } else {
        // Display an error message if input is invalid
        area.innerHTML = "Invalid input. Please enter numbers only.";
        perimeter.innerHTML = "Invalid input. Please enter numbers only.";
    }
});
