const button = document.querySelector("button");

const container = document.querySelector(".container");

for (var col = 1; col <= getGridSize(); col++) {
  const column = document.createElement("div");
  column.classList.add("col");
  for (var box = 1; box <= getGridSize(); box++) {
    const box = document.createElement("div");
    box.classList.add("box");
    column.appendChild(box);
  }
  container.appendChild(column);
}

console.log(getGridSize());

button.addEventListener("click", () => {
  let gridSize = 0;
  do {
    gridSize = prompt("enter number less than 100");
  } while (gridSize > 100);
});

const container = document.querySelector(".container");

for (var col = 1; col <= gridSize; col++) {
  const column = document.createElement("div");
  column.classList.add("col");
  for (var box = 1; box <= gridSize; box++) {
    const box = document.createElement("div");
    box.classList.add("box");
    column.appendChild(box);
  }
  container.appendChild(column);
}

const boxes = document.querySelectorAll(".box");

boxes.forEach((box) => {
  box.addEventListener("mouseover", () =>
    box.setAttribute("style", "background:green")
  );

  box.addEventListener("mouseout", () =>
    box.setAttribute("style", "background: blue")
  );
});
