const board = document.getElementById("board");
const width = board.offsetWidth;
const height = board.offsetHeight;
const start = document.getElementById('start');
const end = document.getElementById('end');
let gameBoard = {}


for(let i=0; i<10; i++){
    board.innerHTML += `<div class='row${i}'></div>`
    gameBoard[i] = {}
    for(let j=0; j<20; j++){
        board.querySelector(`.row${i}`).innerHTML += `<div class='cell' id=${i}${j}></div>`
        gameBoard[i][j] = 0
    }
}

window.onclick = function(e){
    if(e.target.classList.contains('cell')){
        if(e.target.style.backgroundColor != "rgb(237, 149, 38)"){
            change(e.target.id, 1)
            update()
        }else{
            change(e.target.id, 0)
            update()
        }        
    }
    
}

console.log(gameBoard)

function change(id, state){
    if(id.length == 2){
        gameBoard[id.slice(0, 1)][id.slice(1, 2)] = state
    }if(id.length == 3){
        gameBoard[id.slice(0, 1)][id.slice(1, 3)] = state
    }
}

function game(){

}

function update(){
    for(let i=0; i<Object.keys(gameBoard).length; i++){
        let row = gameBoard[i];
        for(let j=0; j<Object.keys(row).length; j++){
            let cell = row[j]
            if(cell == 0){
                document.getElementById(`${i}${j}`).style.backgroundColor = '#040404'
            }else if(cell == 1){
                document.getElementById(`${i}${j}`).style.backgroundColor = '#ed9526'
            }
        }
    }
}