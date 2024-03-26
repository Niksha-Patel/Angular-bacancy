// Stack data structure
class Stack {
  constructor() {
    this.items = [];
  }

  push(element) {
    this.items.push(element);
  }

  pop() {
    if (this.items.length === 0) {
      return "Underflow";
    }
    return this.items.pop();
  }

  isEmpty() {
    return this.items.length === 0;
  }

  printStack(){
    if(this.items.length===0){
      return;
    }
    else{
      for(let i=this.items.length-1;i>=0;i--){
        console.log(this.items[i]);
      }
    }
  }
}

function clearAll() {
  var input = document.getElementById("inputBox");
  input.value = "";
}

function removeLastInput() {
  const displayElement = document.getElementById("inputBox");
  displayElement.value = displayElement.value.slice(0, -1);
}

function input(inputValue) {
  var inputBoxElement = document.getElementById("inputBox");
  var lastChar = inputBoxElement.value.slice(-1);
  var currentInput = inputBoxElement.value;

  var lastIndex = currentInput.length - 1;
  var decimalExists = false;
  for (var i = lastIndex; i >= 0; i--) {
    if (currentInput[i] === '.') {
      decimalExists = true;
      break;
    } else if (/[/*+\-]/.test(currentInput[i])) {
      break;
    }
  }

  if (decimalExists && inputValue === '.') {
    return;
  }

  if (inputValue === "." && !/[*+\-/.]/.test(currentInput.slice(-1)) && /[^0-9\.]/.test(currentInput)) {
    inputBoxElement.value += inputValue;
    return;
  }

  if (/[*+\-/]/.test(inputValue) && currentInput.endsWith(".")) {
    return;
  }

  //cannot enter multiple operators between two operands
  if (/[*+\-/.]/.test(lastChar) && /[*+\-/.]/.test(inputValue)) {
    return;
  }

  inputBoxElement.value += inputValue;
  console.log(inputBoxElement.value);
}

function result() {
  let expression = document.getElementById("inputBox").value;
  try {
    var result = eval(expression);
    document.getElementById("inputBox").value = result;
    addToHistory(expression + " = " + result);
  } catch (error) {
    document.getElementById("inputBox").value = "Error!";
  }
}

// Create a stack to store history
const historyStack = new Stack();

// Function to add calculation history to the stack
function addToHistory(expression) {
  historyStack.push(expression);
}


// Function to display history
function displayHistory() {
  toggleHistory();
  // historyStack.printStack();
  console.log("Calculation History:");
  // Create a temporary stack to preserve original stack
  const tempStack = new Stack();
  var historyContainer = document.getElementById("history");
  historyContainer.innerHTML = "";

  // Move items from original stack to temporary stack and display
  while (!historyStack.isEmpty()) {
    console.log(historyStack);
    const expression = historyStack.pop();
    var historyItem = document.createElement("div");
    historyItem.classList.add("history-item");
    historyItem.textContent = expression;
    historyContainer.appendChild(historyItem);

    console.log(expression);
    // Push item back to original stack
    tempStack.push(expression);
  }

  // Restore items to original stack
  while (!tempStack.isEmpty()) {
    historyStack.push(tempStack.pop());
  }
}

function toggleHistory() {
  const historyContainer = document.querySelector(".history-container");
  if (historyContainer.style.display === "none") {
    historyContainer.style.display = "block";
  } else {
    historyContainer.style.display = "none";
  }
}

function changeTheme() {
  var getTheme = document.querySelector(".nav").textContent;

  if (getTheme === "Light Theme") {
    document.body.style.background = "white";
    const elements = document.getElementsByClassName("button");
    for (var i = 0; i < elements.length; i++) {
      elements[i].style.color = "Black";
    }
    document.querySelector(".nav").textContent = "Dark Theme";
  }
  if (getTheme == "Dark Theme") {
    const newLocal = "Black";
    document.body.style.background = newLocal;
    const elements = document.getElementsByClassName("button");
    for (var i = 0; i < elements.length; i++) {
      elements[i].style.color = "White";
    }
    document.querySelector(".nav").textContent = "Light Theme";
  }
}
