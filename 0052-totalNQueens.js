/**
 * @param {number} n
 * @return {number}
 */

let totalNQueens = function(n) {
    let board = new Array(n).fill("."), res = 0;
    for(let i=0; i<n; i++) {
        board[i] = new Array(n).fill(".")
    }

    let backtrack = function(board, row, n) {
        if(row === n) {
            res++;
            return;
        }
        for(let col=0; col<n; col++) {
            if(!check(board, row, col, n)) {
                continue;
            }
            board[row][col] = "Q";
            backtrack(board, row+1, n)
            board[row][col] = "."
        }
    }
    
    let check = function(board, row, col, n) {
        for(let i = 0; i < n; i++) {
            if(board[i][col] === "Q") {
                return false;
            }
        }
        for(let i = row-1, j = col+1; i>=0 && j<n; i--, j++) {
            if(board[i][j] === "Q") {
                return false;
            }
        }
        for(let i = row-1, j = col-1; i>=0 && j>=0; i--, j--) {
            if(board[i][j] === "Q") {
                return false;
            }
        }
        return true;
    }

    backtrack(board, 0, n)

    console.log(res)
};

// let backtrack = function(board, row, n, res) {
//     if(row === n) {
//         res++;
//         return res;
//     }
//     for(let col=0; col<n; col++) {
//         if(!check(board, row, col, n)) {
//             continue;
//         }
//         board[row][col] = "Q";
//         backtrack(board, row+1, n, res)
//         board[row][col] = "."
//     }
// }

// let check = function(board, row, col, n) {
//     for(let i = 0; i < n; i++) {
//         if(board[i][col] === "Q") {
//             return false;
//         }
//     }
//     for(let i = row-1, j = col+1; i>=0 && j<n; i--, j++) {
//         if(board[i][j] === "Q") {
//             return false;
//         }
//     }
//     for(let i = row-1, j = col-1; i>=0 && j>=0; i--, j--) {
//         if(board[i][j] === "Q") {
//             return false;
//         }
//     }
//     return true;
// }

totalNQueens(4)