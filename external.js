const gridContainer = document.querySelector('.container');

let playerChoice = 16

let slider = document.getElementById("myRange");
let output = document.getElementById("demo");
output.innerHTML = `${slider.value} x ${slider.value}`; 

const blackMode = document.querySelector('#blackMode')
const rainbowMode = document.querySelector('#rainbowMode')
const shaderMode = document.querySelector('#shaderMode')
const eraserMode = document.querySelector('#eraserMode')
const clearMode = document.querySelector('#clearMode')

let currentMode = "black";

function createGrid(playerChoice) {
  gridContainer.innerHTML = '';
  const cellSize = (700/playerChoice)

    for (let rows = 0; rows < playerChoice; rows ++) {
        for (let columns = 0; columns < playerChoice; columns++) {
            const cell = document.createElement('div');
            cell.className = "cell";
            cell.addEventListener("mouseover", () => {
            if (currentMode === "black") {
              cell.style.backgroundColor = "black"
            } else if (currentMode === "rainbow") {
             cell.style.backgroundColor = getRandomColor();
            } else if (currentMode === "eraser") {
              cell.style.backgroundColor = "white"
            } else if (currentMode === "shader") {
              cell.style.backgroundColor = darkenPencilColor(cell);
            }
          });

            cell.style.width = cellSize + 'px';
            cell.style.height = cellSize + 'px';
            
            gridContainer.appendChild(cell);
        }; 
    };

    clearMode.addEventListener("click", () => {
      for (const child of gridContainer.childNodes)
      child.style.backgroundColor = "white";
    })

};  
    


createGrid(playerChoice);

slider.oninput = function() {
    playerChoice = this.value;
    output.innerHTML = `${playerChoice} x ${playerChoice}`;
    createGrid(playerChoice);
  }

  // Get the container element
const btnContainer = document.querySelector('.sideBar');

// Get all buttons with class="btn" inside the container
const btns = btnContainer.getElementsByClassName("btn");

// Loop through the buttons and add the active class to the current/clicked button
for (let i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
    let current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace("active", "");
    this.className += " active";
  });
}

/* const colorType = document.querySelector('.picker')
   const colorValue = colorType.value; */

blackMode.addEventListener("click", () => {
  currentMode = "black"
});

rainbowMode.addEventListener("click", () => {
  currentMode = "rainbow"
});

shaderMode.addEventListener("click", () => {
  currentMode = "shader"
})

eraserMode.addEventListener("click", () => {
  currentMode = "eraser"
});


function getRandomColor() {
  let letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};


function darkenPencilColor(cell) {
  let originalColor = window.getComputedStyle(cell).backgroundColor;
  let currentOpacity = originalColor.match(/[\d.]+/g)[3] || 0.0; // Extract the current opacity

  let newOpacity = parseFloat(currentOpacity)

  if (newOpacity < 0.9 && cell.style.backgroundColor != "black") {
    cell.style.backgroundColor = `rgba(0, 0, 0, ${newOpacity + 0.1})`;
  } else if ( cell.style.backgroundColor = `rgb(0, 0, 0)`) {
    cell.style.backgroundColor = "black"
  }
}

