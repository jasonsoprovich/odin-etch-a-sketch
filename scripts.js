// Create a div container and append to html body
const divContainer = document.createElement('div');
divContainer.className = 'divContainer';
document.body.appendChild(divContainer);

// Add CSS code to assign Flexbox properties
//   Set maximum div container size to 960px
	
// Declare function to build 16x16 div grid createGrid()
function createGrid() {
  const divGrid = document.createElement('div');
  divGrid.className = 'divGrid';
  divGrid.addEventListener('mouseover', () => {
    divGrid.style.backgroundColor = 'pink';
  });
  divContainer.appendChild(divGrid);
}
//   For userInput or 16 iterations:
//     Create square divs to create a grid
//     Assign classes to all divs
//     Append to div container
let gridSize = (16*16);
for (let i = 0; i < gridSize; i++) {
  createGrid();
}
			
// Add event listeners to div grid class for hover state
//   On mouseover change div background color
//   On mouseout revert div background color


// Declare function to reset drawing board and create new customGrid()
//   Remove all existing grid divs in the div container
//   Ask for userInput for new grid size
//     Check for maximum grid size of 100x100
//     Re-create all new divs using createGrid function with custom input