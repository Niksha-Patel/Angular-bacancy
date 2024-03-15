function ClearAll() {
    var input = document.getElementById('inputBox');
    input.value = '';
 }
 function Back() {
    var input = document.getElementById('inputBox');
    input.value = ev.value.slice(0,-1);
 }

function Input(val) {
    var v = document.getElementById('inputBox');
    v.value += val;
    console.log(v.value)
 }
 function Result() {
    var num1 = document.getElementById('inputBox').value;
    var num2 = eval(num1);
    document.getElementById('res').value = num2;
 }
