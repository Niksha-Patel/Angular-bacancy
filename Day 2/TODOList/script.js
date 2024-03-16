const listOfItems=document.getElementById("list-of-items");


function addtolist(){
    var input = document.getElementById("input-box");
    let li=document.createElement("li");
    li.innerHTML = input.value;
    listOfItems.appendChild(li);

}