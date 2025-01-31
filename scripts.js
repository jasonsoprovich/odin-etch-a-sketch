const createGridButton = document.createElement('button');
createGridButton.textContent = 'Create Grid';
createGridButton.className = 'gridButton';
document.body.appendChild(createGridButton);

createGridButton.addEventListener('click', getUserInput);

const divContainer = document.createElement('div');
divContainer.className = 'divContainer';
document.body.appendChild(divContainer);
	
function createGrid() {
  const divGrid = document.createElement('div');
  divGrid.className = 'divGrid';
  divGrid.addEventListener('mouseover', () => {
    divGrid.style.backgroundColor = 'rgb(35, 148, 131)';
    divGrid.style.opacity = (parseFloat(divGrid.style.opacity) || 0) + 0.1;
  });
  divContainer.appendChild(divGrid);
}

function clearGrid() {
  divContainer.innerHTML = '';
}

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
  let gridSplit = 100 / userInput; //100% grid container / userInput
  let gridSize = userInput ** 2;
  
  clearGrid();

  for (let i = 0; i < gridSize; i++) {
    createGrid();
  }

  const cells = document.getElementsByClassName('divGrid');
  for (let cell of cells) {
    cell.style.flex = '1 1 '+ gridSplit + '%';
  }
}