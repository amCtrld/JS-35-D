const display = document.getElementById('display');
const buttons = document.querySelectorAll('button');
function handleButtonClick(event) {
  const buttonValue = event.target.textContent;
  if (['+', '-', '*', '/'].includes(buttonValue)) {
    if (['+', '-', '*', '/'].includes(display.textContent.slice(-1))) {
      display.textContent = display.textContent.slice(0, -1) + buttonValue;
    } else {
      display.textContent += buttonValue;
    }
  } else if (buttonValue === '=') {
    try {
      if (display.textContent.includes('/0')) {
        display.textContent = 'Error: Division by zero';
      } else {
        display.textContent = eval(display.textContent);
      }
    } catch (error) {
      display.textContent = 'Error';
    }
  } else {
    display.textContent += buttonValue;
  }
}
function handleClearClick() {
  display.textContent = '';
}
buttons.forEach(button => {
  if (button.id === 'clear') {
    button.addEventListener('click', handleClearClick);
  } else {
    button.addEventListener('click', handleButtonClick);
  }
});
