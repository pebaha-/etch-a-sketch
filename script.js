const container = document.querySelector("#container");
let gridSize = 16;

for (i = 1; i <= gridSize * gridSize; i++) {
    let div = document.createElement("div");
    div.setAttribute("class", "grid-element")
    div.addEventListener('mouseenter', (event) => {
        div.classList.add("colored-div");
    });
    div.textContent = i;
    container.appendChild(div);
}
