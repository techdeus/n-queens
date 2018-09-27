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
  // initialize a new board
  var board = new Board({n:n});

  var helper = function(row) {
    //loop over cols
    for (var i = 0; i < n; i++) {
      board.togglePiece(row, i); // turn the piece on at the current [row, column]
      // does the current board have any rook conflicts
      if (board.hasAnyRooksConflicts()) {
        board.togglePiece(row, i); // if so, turn that piece off
      } else { //no conflicts
        if (row === n - 1) { //if last row
          return; // exit from the current call in the stack
        }
        helper(row + 1); // call the next row
      }
    }
  };
  helper(0); // initial call with the top row
  var solution = board.rows(); // store the current board 
  console.log('Single solution for ' + n + ' rooks:', JSON.stringify(solution));
  return solution; // return the board
};

// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
window.countNRooksSolutions = function(n) {
  var solutionCount = 0; 
  var board = new Board({n:n});

  if ( n === 0 || n === 1 ) {
    return 1;  
  }

  var helper = function(row) {
    //loop over cols
    
    if (row === n) {
      solutionCount++;
      return;
    }

    for (var i = 0; i < n; i++) {
      board.togglePiece(row, i);
      
      if (!board.hasAnyRooksConflicts()) {
        helper(row + 1);
      }
      board.togglePiece(row, i);      
    }
  };

  helper(0);

  console.log('Number of solutions for ' + n + ' rooks:', solutionCount);
  return solutionCount; 
  // var count = 0;
  // var board = new Board({n:n});

  // var helper = function(row) {
  //   //if row === n we are off the board
  //   if (row === n) {
  //     return;
  //   }
  //   // iterate through the columns in the board
  //   for (var i = 0; i < n; i++) {
  //     board.togglePiece(row, i);
  //     if (board.hasAnyRooksConflicts()) {
  //       board.togglePiece(row, i);
  //     } else { //no conflicts
  //       if (row === n - 1) { //if last row
  //         count++;
  //       }
  //       helper(row + 1);
  //       board.togglePiece(row, i);
  //     }
  //   }
  // };

  // helper(0);
  // console.log('Number of solutions for ' + n + ' rooks:', count);
  // return count;
};

// return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other
window.findNQueensSolution = function(n) {
  // var board = new Board({n:n});
  
  // if (n === 0) {
  //   return [];
  // }
  // if (n === 1) {
  //   return board.rows();
  // }

  // var helper = function(row) {

  //   if (row === n) {
  //     return;
  //   }
  //   //loop over cols
  //   var sum = 0;
  //   for (var i = 0; i < n; i++) {
  //     board.togglePiece(row, i);
      
  //     if (!board.hasAnyQueensConflicts()) {
  //       helper(row + 1);
        
  //     } else {
  //       sum++;
  //       if (sum === n) {
  //         break;
  //       }
  //       board.togglePiece(row, i);  
  //     }
  //   }
  // };

  // helper(0);



  var board = new Board({n:n});
  var queenCount = 0;
  var solution;
  var flag = false;
  if ( n === 1 ) {
    board.togglePiece(0, 0);
    return board.rows();
  }

  if ( n === 0 ||n === 2 || n === 3 ) {
    return board.rows()
  }
  var helper = function(row) {
    //if row === n we are off the board
    if (row === n) {
      return;
    }
    // iterate through the columns in the board
    for (var i = 0; i < n; i++) {// i = 4 /// row = 2
      // if( row === 3) {
      //   debugger;
      // }
      board.togglePiece(row, i); // [2,3]
      queenCount++;
      if (board.hasAnyQueensConflicts()) { //yes
        board.togglePiece(row, i); // [ 2, 3]
        queenCount--;
      } else { //no conflicts
        if (queenCount === n && flag === false) {
          // debugger;
          solution = JSON.stringify(board.rows());
          flag = true;  
          
        }
        helper(row + 1);
        if (queenCount === n) {
          return;
        }
        board.togglePiece(row, i);
        queenCount--;
      }
    }

  };

  helper(0);

  // console.log(solution);
  console.log('Single solution for ' + n + ' queens:', JSON.stringify(solution));
  
  return JSON.parse(solution);
  // var helper = function(row) {
  //   //loop over cols
  //   var numOfConflicts = 0;
  //   for (var i = 0; i < n; i++) {
  //     board.togglePiece(row, i);
  //     if (board.hasAnyQueensConflicts()) {
  //       board.togglePiece(row, i);
  //       numOfConflicts++;
        
  //       if ( numOfConflicts === n ) {
  //         return;  
  //       }
  //     } else { //no conflicts
          
  //       if (row === n - 1) { //if last row
  //         return;
  //       }
  //       helper(row + 1);
  //     }
  //   }
  // };
  
};

// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function(n) {
  // var solutionCount = 0; 
  // var board = new Board({n:n});

  // if ( n === 0 || n === 1 ) {
  //   return 1;  
  // }

  // var helper = function(row) {
  //   //loop over cols
    
  //   if (row === n) {
  //     solutionCount++;
  //     return;
  //   }

  //   for (var i = 0; i < n; i++) {
  //     board.togglePiece(row, i);
      
  //     if (!board.hasAnyQueensConflicts()) {
  //       helper(row + 1);
  //     }
  //     board.togglePiece(row, i);      
  //   }
  // };

  var count = 0;
  var board = new Board({n:n});

  if ( n === 0 || n === 1 ) {
      return 1;  
    }
  var helper = function(row) {
    //if row === n we are off the board
    if (row === n) {
      return;
    }
    // iterate through the columns in the board
    for (var i = 0; i < n; i++) {
      board.togglePiece(row, i);
      if (board.hasAnyQueensConflicts()) {
        board.togglePiece(row, i);
      } else { //no conflicts
        if (row === n - 1) { //if last row
          count++;
        }
        helper(row + 1);
        board.togglePiece(row, i);
      }
    }
  };

  helper(0);

  console.log('Number of solutions for ' + n + ' queens:', count);
  return count;
};
