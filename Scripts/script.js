const board = document.getElementById("board");
const width = board.offsetWidth;
const height = board.offsetHeight;

for(let i=0; i<10; i++){
    for(let j=0; j<20; j++){
        board.innerHTML += "<div class='cell'></div>"
    }
}