// User input for grid size
const gridSize = 16;

// Create reference for general div
const container = document.querySelector('#container');

// for loop to create grid
for (let i = 0; i < gridSize; i++) {

    // create row div element 
    const rowContainer = document.createElement('div');
    
    // Add class to container
    rowContainer.classList.add('rowDiv');

        for (let i = 0; i < gridSize; i++) {
            // create element div
            const rowELement = document.createElement('div'); 

            // Add class to container
            rowELement.classList.add('elementDiv');
            rowContainer.appendChild(rowELement);

            // Add hover event listener to every rowELement
            rowELement.addEventListener('mouseover', () => {
                rowELement.style.backgroundColor = 'black'
            })
        }

    container.appendChild(rowContainer);
}