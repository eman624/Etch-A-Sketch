let gridSize = 0;

const container = document.querySelector(".container");

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

const boxes = document.querySelectorAll(".box");

boxes.forEach((box) => {
  box.addEventListener("mouseover", () =>
    box.setAttribute("style", "background:green")
  );

  box.addEventListener("mouseout", () =>
    box.setAttribute("style", "background: blue")
  );
});

const button = document.querySelector("button");
button.addEventListener("click", () => {
  gridSize = prompt("enter number");
});
