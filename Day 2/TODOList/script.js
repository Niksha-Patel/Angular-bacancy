
function addToList() {
    const inputBox = document.getElementById('input-box');
    const inputValue = inputBox.value; 

    if (inputValue) { 
        const hiddenContainer = document.createElement('div');
        hiddenContainer.classList.add('hidden-container');
        
        const newContainer = document.createElement('div');
        newContainer.classList.add('new-container', 'add-item');

        const paragraph = document.createElement('p');
        paragraph.id = 'add-items-here';
        paragraph.textContent = inputValue;

        newContainer.appendChild(paragraph);
        hiddenContainer.appendChild(newContainer);

        const listContainer = document.querySelector('.list-container');
        listContainer.appendChild(hiddenContainer);

        inputBox.value = '';
    }
}


