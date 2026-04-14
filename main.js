const NUM_SQUARES_ON_SIDE = 16;

const container = document.querySelector("#container");

for (let i = 1; i <= NUM_SQUARES_ON_SIDE; i++) {
  container.appendChild(createRow(NUM_SQUARES_ON_SIDE));
}

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

function darkenDiv(element, percentage = 0.1) {
  element.style.backgroundColor = "black";
  element.style.opacity = Number(element.style.opacity) + percentage;
}
