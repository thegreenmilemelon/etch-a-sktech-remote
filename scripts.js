//each slide will reset and update the grid with the new slider value
const boxContainer = document.querySelector(".box-container");
const slider = document.querySelector(".slider");
slider.addEventListener("input", () => {
  const sliderValue = document.querySelector(".slider-value");
  sliderValue.textContent = slider.value;
  const boxContainer = document.querySelector(".box-container");
  boxContainer.innerHTML = "";
  createGrid(slider.value, slider.value);
});

function createGrid(rows, columns) {
  for (let i = 0; i < rows; i++) {
    const row = document.createElement("div");
    row.classList.add("row");
    //for each row
    row.style.display = "grid";
    row.style.gridTemplateColumns = `repeat(${columns}, 1fr)`;
    for (let j = 0; j < columns; j++) {
      const box = document.createElement("div");
      box.classList.add("box");

      //border for each cell
      box.style.border = "1px solid black";

      row.appendChild(box);
    }
    boxContainer.appendChild(row);
  }
  //add event listener on click once and drag
  const boxes = document.querySelectorAll(".box");
  boxes.forEach((box) => {
    box.addEventListener("mouseover", () => {
      // random color
      const red = Math.floor(Math.random() * 255);
      const green = Math.floor(Math.random() * 255);
      const blue = Math.floor(Math.random() * 255);
      box.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
    });
  });
}

//add event listener to reset
function clearGrid() {
  boxContainer.innerHTML = "";
  createGrid(slider.value, slider.value);
}

//reset button to default
const resetButton = document.querySelector(".reset");
resetButton.addEventListener("click", () => {
  boxContainer.innerHTML = "";
  createGrid(16, 16);
});

//default grid on load
window.onload = function () {
  createGrid(16, 16);
};
