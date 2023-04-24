const container = document.querySelector(".container");

const gridbase = 16;

for(let i = 0; i < (gridbase * gridbase); i++){
    const pixel = document.createElement("div");
    pixel.setAttribute("style", `min-width: ${100 / gridbase}%; min-height: ${100 / gridbase}%;`)
    container.appendChild(pixel);
}