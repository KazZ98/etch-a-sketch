function setGrid(container) {
    while (container.hasChildNodes()) { // this remove all squares div of the container 
        container.removeChild(container.firstChild);
      }
    const layout = parseInt(prompt("Enter a number to set the Columns Grid Layout not greater than 100"));
    console.log(layout);
    if (layout > 100 || isNaN(layout)) {
        alert("Enter a number between 1 to 100! Try again")
        return 0
    }
    return layout
}

function createGrid() {
    const container = document.querySelector(".grid-container");
    const columns = setGrid(container);
    const squareWidth = 500 / columns;
    const gridOf = (columns * columns);

    if (columns === 0){
        return
    }

    container.style.gridTemplateColumns = `repeat(${columns}, auto)`

    for (let i = 0;i < gridOf;i ++) {
        const square = document.createElement("div");
        square.classList.add("square");
        square.setAttribute("style", `height: ${squareWidth}px; width: ${squareWidth}px;`);
        container.appendChild(square);
    }
}

function changeColor(e) {
    const color = e.target.value;
    const squares = document.querySelectorAll(".square");
    squares.forEach(square => square.addEventListener("mouseover", (e) => {
        e.target.style.backgroundColor = color;
    }));
}

function randomColor() {
    const squares = document.querySelectorAll(".square");
    squares.forEach(square => square.addEventListener("mouseover", (e) => {
            const randomColor = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`
            e.target.style.backgroundColor = randomColor;
    }));
}

function wipeOutGrid() {
    const squares = document.querySelectorAll(".square");
    squares.forEach(square => square.style.backgroundColor = "white");
}

const setBtn = document.querySelector("#set-btn");
setBtn.addEventListener("click", createGrid);

const colorInput = document.querySelector("#color-input");
colorInput.addEventListener("change", changeColor);

const randombtn = document.querySelector("#random-btn");
randombtn.addEventListener("click", randomColor);

const eraseBtn = document.querySelector("#erase-btn");
eraseBtn.addEventListener("click", wipeOutGrid);
