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
    running = true;
}
function cellClicked(){

    const cellIndex = this.getAttribute('cellIndex');
    if(options[cellIndex] != '' || !running){
        return;
    }
    
    updateCell(this, cellIndex);
    checkWinner();
}
function updateCell(cell, index){
    options[index] = currentPlayer;
    cell.textContent = currentPlayer;
}
function changePlayer(){
    currentPlayer = (currentPlayer == 'X') ? 'O' : 'X';
    statusText.textContent = `${currentPlayer}'s turn`;
}
function checkWinner(){
    let roundWon = false;
    
    for(let i = 0; i < winConditions.length; i++){
        const condition = winConditions[i];
        const cellA = options[condition[0]];
        const cellB = options[condition[1]];
        const cellC = options[condition[2]];

        if(cellA =='' || cellB == '' || cellC == ''){
            continue;
        }
        if(cellA == cellB && cellB == cellC){
            roundWon = true;
            break;
        }
    }

    if(roundWon){
        statusText.textContent = `${currentPlayer} wins!!`;
        running = false;
    }
    else if(!options.includes('')){
        statusText.textContent = 'Draw!';
        running = false;
    }
    else{
        changePlayer();
    }
}
function restartGame(){
    currentPlayer = 'X';
    let options = ['','','','','','','','',''];
    statusText.textContent = `${currentPlayer}'s turn`;
    cells.forEach(cell => cell.textContent = '');
    running = true;
}