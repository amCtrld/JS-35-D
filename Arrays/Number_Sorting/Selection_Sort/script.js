let toSort = [];

const numbersToSort = document.getElementById("numbers");
const sortButton = document.getElementById("sort");
const sortedNumbers = document.getElementById("sortedNumbers");


sortButton.addEventListener("click", () => {
    const inputString = numbersToSort.value;

    toSort = inputString.split(",").map(Number);

    selectionSort(toSort);

    sortedNumbers.innerHTML = toSort.join(", ");
});

// Selection Sort function
function selectionSort(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        let minIndex = i;
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j;
            }
        }
        // Swap elements
        let temp = arr[i];
        arr[i] = arr[minIndex];
        arr[minIndex] = temp;
    }
    return arr;
}
