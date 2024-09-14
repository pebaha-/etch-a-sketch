const container = document.querySelector("#container");
drawGrid(16);

function drawGrid(gridSize) {
    for (i = 1; i <= gridSize * gridSize; i++) {
        let div = document.createElement("div");
        div.setAttribute("class", "grid-element")
        div.addEventListener('mouseenter', (event) => {
            div.style.backgroundColor = getRandomColor();
        });
        div.style.width = `${container.clientWidth / gridSize}px`;
        div.style.height = `${container.clientWidth / gridSize}px`;
        container.appendChild(div);
    }
}

function clearGrid() {
    // While the container has a child, remove the last child.
    // We remove the last child as it's faster than removing the first child
    // since avoid re-indexing all of the remaining children.
    while (container.firstChild) {
        container.removeChild(container.lastChild);
    }
}

function isInteger(value) {
    if (parseInt(value, 10).toString() === value) {
        return true
    }
    return false;
}

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

const button = document.querySelector("#inputBtn");
button.addEventListener('click', (event) => {
    let newSize = prompt("Please enter size for the grid (eg. 16)", 16);

    if (newSize != null && isInteger(newSize)) {
        newSize = Number(newSize);
        if (newSize > 100) {
            alert("Grid size is too big. Please enter a value no more than 100.")
        } else {
            clearGrid();
            drawGrid(newSize);
        }
    }
});