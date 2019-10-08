document.addEventListener('DOMContentLoaded', startGame)

// Define your `board` object here!
var board = {
  cells: [
// old manual board
          // { row: 0, col: 0, isMine: true, hidden: true, surroundingMines: 0}, { row: 0, col:1, isMine:false, hidden: true, surroundingMines: 0}, { row: 0, col:2, isMine:false, hidden: true, surroundingMines: 0}, 
          // { row: 1, col:0, isMine:false, hidden: true, surroundingMines: 0}, { row: 1, col:1, isMine:false, hidden: true, surroundingMines: 0}, { row: 1, col:2, isMine:false, hidden: true, surroundingMines: 0}, 
          // { row: 2, col:0, isMine:false, hidden: false, surroundingMines: 0}, { row: 2, col:1, isMine:false, hidden: true, surroundingMines: 0}, { row: 2, col:2, isMine:false,hidden: true, surroundingMines:0}
        ]
  // rows:  [1,2,3,4,5,6,7,8 ]
}

dynamicBoard = () => {
  for (var i = 0; i < 6; i++) {
    for (var j = 0; j < 6; j++) {
      board.cells.push({
        row: i,
        col: j,
        isMine: Boolean(Math.floor(Math.random() * 1.1)),
        isMarked: false,
        hidden: true })
    }
  }
 }


function startGame () {
  // create the board
  dynamicBoard()
  // count the surrounding mines
  board.cells.forEach(function(cell) {
    cell.surroundingMines = countSurroundingMines(cell);
  })
  // check for win condition
  document.addEventListener("click", checkForWin);
  document.addEventListener("contextmenu", checkForWin);
  // Don't remove this function call: it makes the game work!
  lib.initBoard()
}

// Define this function to look for a win condition:
//
// 1. Are all of the cells that are NOT mines visible?
// 2. Are all of the mines marked?
function checkForWin () {

  for (i = 0; i < board.cells.length; i++) {
    if (board.cells[i].isMine === true && board.cells[i].isMarked === false) {
      return
    } else 
    if (board.cells[i].isMine === false && board.cells[i].hidden == true) {
      return 
    } 
  }
  lib.displayMessage('You win!'); 
}

// Define this function to count the number of mines around the cell
// (there could be as many as 8). You don't have to get the surrounding
// cells yourself! Just use `lib.getSurroundingCells`: 

//
//   var surrounding = lib.getSurroundingCells(cell.row, cell.col)
//
// It will return cell objects in an array. You should loop through 
// them, counting the number of times `cell.isMine` is true.
function countSurroundingMines (cell) {
  var Near = lib.getSurroundingCells(cell.row, cell.col); 
  var xMines = 0;
  for (i=0; i < Near.length; i++) {
    if (Near[i].isMine === true) {
      xMines++;
    }
    
    

  }
  return xMines;
// for as long as surrounding cells.length,
// check each cell property cell.isMine is true
// if it is true, increase suppounding mines by 1

//return surrounding mines to 

}

