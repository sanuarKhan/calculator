// geting all neccesrary dom
const display = document.querySelector(".display");
const input = document.querySelector(".input-key");
const operant = document.querySelector(".operant");
const equal = document.querySelector(".equal");
const allClear = document.querySelector(".all-clear");

// function for addtion
const add = (arr) => {
  const splitArr = arr.split("+");
  const a = parseInt(splitArr[0]);
  const b = parseInt(splitArr[1]);
  return a + b;
};
// function for substruction
const subtruc = (arr) => {
  const splitArr = arr.split("-");
  const a = parseInt(splitArr[0]);
  const b = parseInt(splitArr[1]);
  return a - b;
};
// function for multipy
const multiply = (arr) => {
  const splitArr = arr.split("x");
  const a = parseFloat(splitArr[0]);
  const b = parseFloat(splitArr[1]);
  return a * b;
};
// function for division
const division = (arr) => {
  const splitArr = arr.split("/");
  const a = parseInt(splitArr[0]);
  const b = parseInt(splitArr[1]);
  return a / b;
};

// showing inputs on display
input.addEventListener("click", (e) => {
  if (display.innerText == 0) {
    display.innerText = "";
  }
  const equalSign = equal.innerText;
  const AC = allClear.innerText;
  if (e.target.innerText != equalSign && e.target.innerText != AC) {
    display.innerText += e.target.innerText;
  }
});

// showing resuts
equal.addEventListener("click", () => {
  const val = display.innerText;

  if (val.includes("+")) {
    const result = add(val);
    display.innerText = result;
  }
  if (val.includes("-")) {
    const result = subtruc(display.innerText);
    display.innerText = result;
  }
  if (val.includes("x")) {
    const result = multiply(val);
    display.innerText = result;
  }
  if (val.includes("/")) {
    const result = division(val);
    display.innerText = result;
  }
});

// clearning everuthing from display

allClear.addEventListener("click", () => {
  display.innerText = "";
});
