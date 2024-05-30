document.addEventListener('DOMContentLoaded', () => {
const cells=document.querySelectorAll(".cell");
const message=document.getElementById("message");
const restartButton = document.getElementById("restart");

let board=['','','','','','','','',''];
let gameActive=true;
let currentPlayer='X';

const winningConditions=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
];

function handleCellClick(e){
const cell = e.target;
cell.style.backgroundColor='yellow';
const index=parseInt(cell.getAttribute('data-number'));
if(board[index]!='' || !gameActive)
    return;

cell.innerText=currentPlayer;
board[index]=currentPlayer;
checkResult();
currentPlayer= currentPlayer==='X'? 'O':'X';


}
function checkResult(){
    let winner=false;
    for(let i=0;i<winningConditions.length;i++){
        const [a,b,c]=winningConditions[i];
        if(board[a] && board[a]=== board[b]&& board[a]===board[c]){
            winner=true;
            break;
        }
    }

    if(winner){
        message.innerText=`Player ${currentPlayer} has won`;
        gameActive=false;
        return;
    }

    if(!board.includes('')){
        message.innerText='Draw';
        gameActive='false';
    }
}

function restartGame(){
    currentPlayer='X';
    board=['','','','','','','','',''];
    gameActive=true;
    message.innerText='';
    cells.forEach(cell =>{
        cell.innerText='';
    })

}

cells.forEach(cell => cell.addEventListener('click', handleCellClick));
restartButton.addEventListener('click',restartGame);



});