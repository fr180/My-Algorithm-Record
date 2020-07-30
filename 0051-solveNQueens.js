/**
 * @param {number} n
 * @return {string[][]}
 */

let solveNQueens = function(n) {
    let board = new Array(n).fill("."), res = [];
    for(let i=0; i<n; i++) {
        board[i] = new Array(n).fill(".")
    }
    backtrack(board, 0, n, res)
    console.log(res)
};

let backtrack = function(board, row, n, res) {
    if(row === n) {
        let tmp = [];
        board.forEach(element => {
            tmp.push(element.join(""))
        });
        res.push(tmp);
        return;
    }
    for(let col=0; col<n; col++) {
        if(!check(board, row, col, n)) {
            continue;
        }
        board[row][col] = "Q";
        backtrack(board, row+1, n, res)
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


solveNQueens(4)