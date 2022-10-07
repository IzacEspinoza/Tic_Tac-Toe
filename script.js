const cells = document.querySelectorAll(".cell");
const statusText = document.querySelector("#status");
const restartBtn = document.querySelector("#restartButton");
const winConditions = 
[//pretty much these are the possible wins
    [0,1,2],//rows
    [3,4,5],
    [6,7,8],
    [0,3,6],//columns
    [1,4,7],
    [2,5,8],
    [0,4,8],//diagnals
    [2,4,6],
];

let options = ['','','','','','','','',''];
let currentPlayer = 'X';
let running = false;//is game running?

//start of the game
initializeGame();

function initializeGame(){//fills info for begining of game
    cells.forEach(cell => cell.addEventListener('click', cellClicked));
    restartBtn.addEventListener('click', restartGame);
    statusText.textContent = `${currentPlayer}'s turn`;
}
function cellClicked(){
    const cellIndex = this.getAttribute('cellIndex');

    if(options[cellIndex] != '' || !running){
        return;//cell was empty or game wasnt started yet, so do nothing!
    }

    updateCell(this, cellIndex);
    checkWinner();
}
function updateCell(cell, index){

}
function changePlayer(){

}
function checkWinner(){

}
function restartGame(){

}