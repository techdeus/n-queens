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

  var chessBoard = new Board({n:n});
  if (n === 1) {
    chessBoard.togglePiece(0,0)
    console.log()
  return chessBoard.rows()
  }
  console.log(chessBoard);
  var checkIthRow = function(row) {
    if (row === n) {
      return;  
    }

    for ( var i = 0; i < n; i++ ) {
      chessBoard.togglePiece(row, i);
      var checkCollision = chessBoard.hasAnyRooksConflicts(); // placeholder for now
      
      if (checkCollision) {
        chessBoard.togglePiece(row, i);
      }

      if (!checkCollision) {
        if (row === n - 1 ) {
          var solution = chessBoard.rows();
          console.log('Single solution for ' + n + ' rooks:', JSON.stringify(solution));  
          return solution;
        }    
        checkIthRow(row + 1);
      }
    }
  };  
  checkIthRow(0);
  
};

// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
window.countNRooksSolutions = function(n) {
  var solutionCount = 0;
  var board = this.rows();

  var checkIthRow = function(row) {
    if (row === n) {
      return;  
    }
    for ( var i = 0; i < board.length; i++ ) {
      this.togglePiece(row, i);
      var checkCollision = this.hasAnyRooksConflicts(); // placeholder for now
      
      if (!checkCollision) {
        if (row === n - 1 ) {
          solutionCount++;
        }    
        checkIthRow(row + 1);
      
      }
    }
    this.set(row, Array(n).fill(0)); // Maybe row + 1
    checkIthRow(0);
  };

  console.log('Number of solutions for ' + n + ' rooks:', solutionCount);
  return solutionCount;
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
