function ClearAll() {
  var input = document.getElementById('inputBox');
  input.value = '';
}
function Back() {
  var input = document.getElementById('inputBox');
  input.value = input.value.slice(0, -1);
}

function Input(val) {
  var v = document.getElementById('inputBox');
  v.value += val;
  console.log(v.value)
}
function Result() {
  var num1 = document.getElementById('inputBox').value;
  var num2 = eval(num1);
  console.log(num2);
  document.getElementById('inputBox').value = num2;
}

function changeTheam() {

  document.body.style.background = "white";
  var elements = document.getElementsByClassName('button');
  for (var i = 0; i < elements.length; i++) {
    elements[i].style.color = 'Black';
  }
  document.getElementsByClassName('change-theam').Text = "Dark Theam";
}