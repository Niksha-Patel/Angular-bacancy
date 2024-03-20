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
  try {
    var num1 = document.getElementById('inputBox').value;
    var num2 = eval(num1);
    document.getElementById('inputBox').value = num2;
  }
  catch (error) {
    document.getElementById('inputBox').value = "Error!";
  }
}

function changeTheam() {

  var gettheam = document.querySelector('.change-theam').textContent

  if (gettheam == "Light Theam") {
    document.body.style.background = "white";
    var elements = document.getElementsByClassName('button');
    for (var i = 0; i < elements.length; i++) {
      elements[i].style.color = 'Black';
    }
    document.querySelector('.change-theam').textContent = "Dark Theam";
  }
  if (gettheam == "Dark Theam") {
    const newLocal = "Black";
    document.body.style.background = newLocal;
    var elements = document.getElementsByClassName('button');
    for (var i = 0; i < elements.length; i++) {
      elements[i].style.color = 'White';
    }
    document.querySelector('.change-theam').textContent = "Light Theam";
  }


}