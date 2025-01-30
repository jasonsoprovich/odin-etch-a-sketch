// Create a div container and append to html body
const divContainer = document.createElement('div');
divContainer.className = 'divContainer';
document.body.appendChild(divContainer);

// Add CSS code to assign Flexbox properties
//   Set maximum div container size to 960px
	
function createGrid() {
  const divGrid = document.createElement('div');
  divGrid.className = 'divGrid';
  divGrid.addEventListener('mouseover', () => {
    divGrid.style.backgroundColor = 'pink';
  });
  divContainer.appendChild(divGrid);
}

const createGridButton = document.createElement('button');
createGridButton.textContent = 'Create Grid';
createGridButton.className = 'gridButton';
document.lastElementChild.appendChild(createGridButton);

createGridButton.addEventListener('click', getUserInput);

let userInput = null;

function getUserInput() {
  userInput = prompt('Enter a number between 1 and 100: ');
  let validInput = false;

  while (validInput === false) {
    
    if (userInput === null) {
      return null;
    }
    
    userInput = parseFloat(userInput);

    if (userInput <= 0 ||
        userInput > 100 ||
        isNaN(userInput)
      ) {
      userInput = prompt('Enter a number between 1 and 100: ');
      } else {
      validInput = true;
      newGrid(Math.floor(userInput));
    }
  }
}

function newGrid(userInput) {
  let gridSize = userInput ** 2;
  
  for (let i = 0; i < gridSize; i++) {
    createGrid();
  }
}

// Declare function to reset drawing board and create new customGrid()
//   Remove all existing grid divs in the div container
//   Ask for userInput for new grid size
//     Check for maximum grid size of 100x100
//     Re-create all new divs using createGrid function with custom input