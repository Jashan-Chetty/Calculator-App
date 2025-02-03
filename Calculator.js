let calculation = localStorage.getItem("calculation") || "";

function updateCalculation(number) {
  calculation += number;
  displayEntity();
  localStorage.setItem("calculation", calculation);
}

function displayEntity() {
  document.querySelector(".display-element").innerHTML = calculation;
}