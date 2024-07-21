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
        }

    container.appendChild(rowContainer);
}