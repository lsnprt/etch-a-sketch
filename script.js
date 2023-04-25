window.addEventListener("load", initializeGrid(16));

const button = document.querySelector("button");
button.addEventListener("click", () => {
    clearGrid();
    const userPrompt = getUserPrompt();
    initializeGrid(userPrompt);
});

function initializeGrid(gridbase) {
    const container = document.querySelector(".container");
    
    for(let i = 0; i < (gridbase * gridbase); i++){
        const pixel = document.createElement("div");
        
        pixel.setAttribute("class", "pixel");
        pixel.setAttribute("style", `min-width: ${100 / gridbase}%; min-height: ${100 / gridbase}%;`);
        container.appendChild(pixel);

        pixel.addEventListener("mouseover", function(e) {
             let backgroundProperty = window.getComputedStyle(this).backgroundColor;
             let rgbArray = backgroundProperty.slice(4, -1).split(",").map(Number);
             const rgbNewValue = rgbArray[0] - 25.5;
             
             if (rgbNewValue > 0){
                 e.target.style.backgroundColor = `rgb(${rgbNewValue}, ${rgbNewValue}, ${rgbNewValue})`;
             }
         })

    }
}

function getUserPrompt() {
    let keepGoing = true;

    while(keepGoing){
        const userChoice = prompt("Select a number (0-100)");
        const userChoiceParsed = Number.parseInt(userChoice)
        
        if (userChoiceParsed > 0 && userChoiceParsed <= 100){
            return userChoiceParsed;
        } 
    }
}

function clearGrid() {
    const pixels = document.querySelectorAll(".pixel");
    const container = document.querySelector(".container");
    
    for(let i = pixels.length; i > 0; i--){
        container.removeChild(container.lastChild);
    }
}

