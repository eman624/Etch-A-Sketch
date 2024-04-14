const container = document.querySelector(".container");
const resetButton = document.querySelector(".reset-button");

function createGrid(gridSize) {
  const wrapper = document.createElement("div");
  wrapper.classList.add("wrapper");

  for (var i = 1; i <= gridSize; i++) {
    const row = document.createElement("div");
    row.classList.add("grid-row");

    for (var j = 1; j <= gridSize; j++) {
      const widthAndHeight = 960 / gridSize;
      const gridBox = document.createElement("div");
      gridBox.classList.add("grid-box");
      gridBox.style.width = `${widthAndHeight}px`;
      gridBox.style.height = `${widthAndHeight}px`;

      gridBox.addEventListener("mouseover", () => {
        gridBox.style.background = "green";
      });

      gridBox.addEventListener("mouseout", () => {
        gridBox.style.background = "blue";
      });

      row.appendChild(gridBox);
    }
    wrapper.appendChild(row);
  }
  container.appendChild(wrapper);
}

resetButton.addEventListener("click", () => {
  let newGridSize = 0;
  do {
    newGridSize = Number(prompt("enter number less than 100"));
  } while (newGridSize > 100);

  const wrapper = document.querySelector(".wrapper");

  if (!wrapper) {
    createGrid(newGridSize);
  } else {
    wrapper.remove();
    createGrid(newGridSize);
  }
});
