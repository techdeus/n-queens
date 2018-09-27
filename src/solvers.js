/*            _
   ___  ___ | |_   _____ _ __ ___
  / __|/ _ \| \ \ / / _ \ '__/ __|
  \__ \ (_) | |\ V /  __/ |  \__ \
  |___/\___/|_| \_/ \___|_|  |___/

*/

// hint: you'll need to do a full-search of all possible arrangements of pieces!
// (There are also optimizations that will allow you to skip a lot of the dead search space)
// take a look at solversSpec.js to see what the tests are expecting


// return a matrix (an array of arrays) representing a single nxn chessboard, 
// with n rooks placed such that none of them can attack each other

window.findNRooksSolution = function(n) {
  var board = new Board({n:n})
  var helper = function(row) {
    //loop over cols
    for (var i = 0; i < n; i++) {
      board.togglePiece(row, i)
      if (board.hasAnyRooksConflicts()) {
        board.togglePiece(row, i)
      } else { //no conflicts
        if (row === n - 1) { //if last row
          return
        }
        helper(row + 1)
      }
    }
  }
  helper(0)
  var solution = board.rows()
  console.log('Single solution for ' + n + ' rooks:', JSON.stringify(solution));
  return solution
}

// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
window.countNRooksSolutions = function(n) {
  var count = 0;
  var board = new Board({n:n})
  var helper = function(row) {
    //if row === n we are off the board
    if (row === n) {
      return
    }
    for (var i = 0; i < n; i++) {
      board.togglePiece(row, i)
      if (board.hasAnyRooksConflicts()) {
        board.togglePiece(row, i)
      } else { //no conflicts
        if (row === n - 1) { //if last row
          count++
        }
        helper(row + 1)
        board.togglePiece(row, i)
      }
    }
  }
  helper(0)
  console.log('Number of solutions for ' + n + ' rooks:', count);
  return count;
};

// return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other
window.findNQueensSolution = function(n) {
  var solution = undefined; //fixme

  console.log('Single solution for ' + n + ' queens:', JSON.stringify(solution));
  return solution;
};

// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function(n) {
  var solutionCount = undefined; //fixme

  console.log('Number of solutions for ' + n + ' queens:', solutionCount);
  return solutionCount;
};
