let toSort = [];

const numbersToSort = document.getElementById("numbers");
const sortButton = document.getElementById("sort");
const sortedNumbers = document.getElementById("sortedNumbers");


sortButton.addEventListener("click", () => {
    const inputString = numbersToSort.value;

    toSort = inputString.split(",").map(Number);

    bubbleSort(toSort);

    sortedNumbers.innerHTML = toSort.join(", ");
});

// Bubble Sort function
function bubbleSort(arr) {
  let swapped;
  do {
    swapped = false;
    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i] > arr[i + 1]) {
        // Swap elements
        let temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
        swapped = true;
      }
    }
  } while (swapped);
  return arr;
}
