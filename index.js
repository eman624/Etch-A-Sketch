const container = document.querySelector(".container");

// for (var col = 1; col <= 16; col++) {
//   const column = document.createElement("div");
//   column.classList.add("col");
//   column.textContent = col;
//   container.appendChild(column);
// }

// const column = document.querySelector(".col");

// for (var row = 1; row <= 16; row++) {
//   const box = document.createElement("div");
//   box.classList.add("box");
//   column.appendChild(box);
// }

for (var col = 1; col <= 16; col++) {
  const column = document.createElement("div");
  column.classList.add("col");
  for (var box = 1; box <= 16; box++) {
    const box = document.createElement("div");
    box.classList.add("box");
    column.appendChild(box);
  }
  container.appendChild(column);
}
