// linguist-language=JavaScript
// Calculator Functionality
let displayValue = '0';

function updateDisplay() {
  document.querySelector('.display').textContent = displayValue;
}

function handleButtonClick(value) {
  if (displayValue === '0' && value !== '.') {
    displayValue = value;
  } else {
    displayValue += value;
  }
  updateDisplay();
}

function calculate() {
  try {
    displayValue = eval(displayValue).toString();
  } catch (error) {
    displayValue = 'Error';
  }
  updateDisplay();
}

function clearDisplay() {
  displayValue = '0';
  updateDisplay();
}

// Initialize calculator
document.addEventListener('DOMContentLoaded', () => {
  updateDisplay();
  document.querySelectorAll('.btn').forEach(button => {
    button.addEventListener('click', () => {
      if (button.dataset.action === 'calculate') {
        calculate();
      } else if (button.dataset.action === 'clear') {
        clearDisplay();
      } else {
        handleButtonClick(button.textContent);
      }
    });
  });
});
