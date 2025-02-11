const clear = document.querySelector("#clear");
const screen = document.querySelector("#screen");
const oneBtn = document.querySelector("#one");
const twoBtn = document.querySelector("#two");
const threeBtn = document.querySelector("#three");
const fourBtn = document.querySelector("#four");
const fiveBtn = document.querySelector("#five");
const sixBtn = document.querySelector("#six");
const sevenBtn = document.querySelector("#seven");
const eightBtn = document.querySelector("#eight");
const nineBtn = document.querySelector("#nine");
const zeroBtn = document.querySelector("#zero");
const equalBtn = document.querySelector("#isequal");
const plus = document.querySelector("#plus");
const minus = document.querySelector("#minus");
const divide = document.querySelector("#divide");
const multiply = document.querySelector("#multiply");

oneBtn.addEventListener("click", display);
twoBtn.addEventListener("click", display);
threeBtn.addEventListener("click", display);
fourBtn.addEventListener("click", display);
fiveBtn.addEventListener("click", display);
sixBtn.addEventListener("click", display);
sevenBtn.addEventListener("click", display);
eightBtn.addEventListener("click", display);
nineBtn.addEventListener("click", display);
zeroBtn.addEventListener("click", display);
equalBtn.addEventListener("click", operate);
clear.addEventListener("click", clearInput);
plus.addEventListener("click", display);
divide.addEventListener("click", display);
multiply.addEventListener("click", display);
minus.addEventListener("click", display);


let result;
let firstValue = "";
let secondValue = "";
let operator;

function display(e) {
  let text = e.target.textContent;

  if (text == "+" || text == "-" || text == "*" || text == "/") {
    operator = text;
    console.log({ operator });
    return;
  }
  if (operator == null) {
    firstValue = firstValue + text;
   screen.textContent = firstValue;

  } else {
    secondValue = secondValue + text;
   screen.textContent = secondValue;

  }
  console.log({ firstValue });
  console.log({ secondValue });
}

function clearInput(e) {
  screen.textContent = "";
  firstValue = "";
  secondValue = "";
  operator = null
}

function operate(e) {
  
  if  (operator == "+") {
    result = add(parseInt(firstValue), parseInt(secondValue));
  } else if (operator == "-") {
    result = subtract(parseInt(firstValue),parseInt(secondValue));
  } else if (operator == "/") {
    result = divideFn(parseInt(firstValue), parseInt(secondValue));
  } else if (operator == "*") {
    result = multiplyFn(parseInt(firstValue), parseInt(secondValue));
  }
  screen.textContent = Math.round(Math.abs(result));

}



const add = function (a, b) {
  return a + b;
};

const subtract = function (a, b) {
  return a - b;
};

const multiplyFn = function (a, b) {
  return a * b;
};

const divideFn = function (a, b) {
  if( a==0 || b==0){
    return "Error"
  } else {
    return a/b
  }
};
