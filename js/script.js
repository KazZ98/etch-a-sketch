function setGrid(container) {
    while (container.hasChildNodes()) { // this remove all squares div of the container 
        container.removeChild(container.firstChild);
      }
    const layout = parseInt(prompt("Enter a number to set the Grid Layout not greater than 100"));
    console.log(layout);
    if (layout > 100 || isNaN(layout)) {
        alert("Enter a number between 1 to 100! Try again")
        return 0
    }
    return layout
}

function createGrid() {
    const container = document.querySelector(".main-container");
    const columns = setGrid(container);
    const squareWidth = 8;
    const gridOf = (columns * columns);

    if (columns === 0){
        return
    }

    container.style.gridTemplateColumns = `repeat(${columns}, auto)`
    container.style.width = `${(columns * squareWidth)}px;`

    for (let i = 0;i < gridOf;i ++) {
        const grid = document.createElement("div");
        grid.classList.add("square");
        grid.setAttribute("style", `height: ${squareWidth}px; width: ${squareWidth}px;`);
        container.appendChild(grid);
    }
}

function changeColor() {
    const color = prompt("Write your pencil color, e.g 'pink' or 'random' for a random colors");
    const squares = document.querySelectorAll(".square");
    squares.forEach(square => square.addEventListener("mouseover", (e) => {
        if (color === "random") {
            const randomColor = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`
            e.target.style.backgroundColor = randomColor;
        } else {
            e.target.style.backgroundColor = color;
        }
    }))
}

function wipeOutGrid() {
    const squares = document.querySelectorAll(".square");
    squares.forEach(square => square.style.backgroundColor = "white");
}

const setBtn = document.querySelector("#set-btn");
setBtn.addEventListener("click", createGrid);

const colorBtn = document.querySelector("#color-btn");
colorBtn.addEventListener("click", changeColor);

const eraseBtn = document.querySelector("#erase-btn");
eraseBtn.addEventListener("click", wipeOutGrid);
