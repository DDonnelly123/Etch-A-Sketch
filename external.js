const gridContainer = document.querySelector('.container');

let playerChoice = 16

let slider = document.getElementById("myRange");
let output = document.getElementById("demo");
output.innerHTML = `${slider.value} x ${slider.value}`; 




function createGrid(playerChoice) {

    gridContainer.innerHTML = '';

    for (let rows = 0; rows < playerChoice; rows ++) {
        for (let columns = 0; columns < playerChoice; columns++) {
            const cell = document.createElement('div');
            cell.className = "cell";
            gridContainer.appendChild(cell);
        };
    };
    
    const cellSize = (700/playerChoice)
    const cells = document.querySelectorAll('.cell');

    cells.forEach((cell) => {
        cell.style.width = cellSize + 'px';
        cell.style.height = cellSize + 'px'
    }) ;

};

createGrid(playerChoice);

slider.oninput = function() {
    const playerChoice = this.value;
    output.innerHTML = `${playerChoice} x ${playerChoice}`;
    createGrid(playerChoice);
  }




