function createGrid(gridSize) {

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
                let a = 0;
                rowELement.addEventListener('mouseover', () => {
                    // Randomize color and add opacity in each iter
                    const r = Math.random() * 255;
                    const g = Math.random() * 255;
                    const b = Math.random() * 255;
                    a += 0.1;
                    rowELement.style.backgroundColor = `rgb(${r}, ${g}, ${b}, ${a})`;
                })
            }

        container.appendChild(rowContainer);
    }
}

// Defalt value for grid size
const gridSize = 16;

// Run at least once
createGrid(gridSize);

// Connect function to button
btn = document.querySelector('button');

// Add reset function to button
btn.addEventListener('click', () => {

    // get user input on new grid size
    const newGridSize = prompt('Please enter a new Grid Size');

    // Limit max grid size and solve for negative inputs
    if (newGridSize > 100) {
        newGridSize = 100;
    } else if (newGridSize < 0) {
        newGridSize = newGridSize * -1;
    }

    // Delete all previous elements
    const removedElements = document.querySelectorAll('.rowDiv')
    removedElements.forEach(element => {
        element.remove();
    })

    createGrid(newGridSize)
})


