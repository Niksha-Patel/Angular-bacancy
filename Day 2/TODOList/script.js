
function addToList() {
    const inputBox = document.getElementById('input-box');
    const inputValue = inputBox.value; 
 
    debugger;
    if (inputValue) { 
        const hiddenContainer = document.createElement('div');
        hiddenContainer.classList.add('hidden-container');
        
        const newContainer = document.createElement('div');
        newContainer.classList.add('new-container', 'add-item');

        const paragraph = document.createElement('p');
        paragraph.id = 'add-items-here';
        paragraph.textContent = inputValue;

        const closeButton = document.createElement('button');
        closeButton.classList.add('close-button');
        closeButton.textContent = 'X';

        newContainer.appendChild(paragraph);
        newContainer.appendChild(closeButton);

        // const strike = document.createElement("strike");
        // strike.textContent=inputBox;
        closeButton.addEventListener('click', function() {
                // paragraph.textContent=strike;
                newContainer.remove();

        });

        hiddenContainer.appendChild(newContainer);

        const listContainer = document.querySelector('.list-container');
        listContainer.appendChild(hiddenContainer);

        inputBox.value = '';
    }
}


