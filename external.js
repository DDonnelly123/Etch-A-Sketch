const gridContainer = document.querySelector('.container');

let playerChoice = 16

let slider = document.getElementById("myRange");
let output = document.getElementById("demo");
output.innerHTML = `${slider.value} x ${slider.value}`; 


function createGrid(playerChoice) {
  gridContainer.innerHTML = '';
  const cellSize = (700/playerChoice)

    for (let rows = 0; rows < playerChoice; rows ++) {
        for (let columns = 0; columns < playerChoice; columns++) {
            const cell = document.createElement('div');
            cell.className = "cell";
            cell.addEventListener("mouseover", () => {
            cell.style.backgroundColor = "black"
          });

            cell.style.width = cellSize + 'px';
            cell.style.height = cellSize + 'px';
            
            gridContainer.appendChild(cell);
        }; 
    };
};  
    



createGrid(playerChoice);

slider.oninput = function() {
    const playerChoice = this.value;
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


const blackMode = document.querySelector('#blackMode')
const rainbowMode = document.querySelector('#rainbowMode')
const eraserMode = document.querySelector('#eraserMode')
const clearMode = document.querySelector('#clearMode')

