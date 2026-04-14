const DEFAULT_NUM_SQUARES_ON_SIDE = 16;

const container = document.querySelector("#container");
const newGridInput = document.querySelector("#dimension-input > input");
const newGridBtn = document.querySelector("#dimension-input > button");
const warningTextPara = document.querySelector("#warning-text");

// Create a 16x16 grid by default
createGrid(DEFAULT_NUM_SQUARES_ON_SIDE);

function createRow(numDivs) {
  let rowDiv = document.createElement("div");
  rowDiv.setAttribute("id", "row");
  rowDiv.style.display = "flex";
  for (let i = 1; i <= numDivs; i++) {
    let squareDiv = document.createElement("div");
    squareDiv.setAttribute("class", "tile");
    squareDiv.addEventListener("mouseover", () => darkenDiv(squareDiv));
    rowDiv.appendChild(squareDiv);
  }
  return rowDiv;
}

function createGrid(sideDimension) {
  for (let i = 1; i <= sideDimension; i++) {
    container.appendChild(createRow(sideDimension));
  }
}

function darkenDiv(element, percentage = 0.1) {
  element.style.backgroundColor = "black";
  element.style.opacity = Number(element.style.opacity) + percentage;
}

newGridBtn.addEventListener("click", () => {
  cellsPerRow = Number(newGridInput.value);
  if (cellsPerRow > 100 || cellsPerRow < 0) {
    warningTextPara.textContent = "Please choose a number between 0 and 100";
  } else if (cellsPerRow > 0) {
    warningTextPara.textContent = "";
    containerRows = document.querySelectorAll("#row");
    containerRows.forEach((row) => row.remove());
    createGrid(cellsPerRow);
  } else {
    warningTextPara.textContent = "Please enter a valid input";
  }
});
