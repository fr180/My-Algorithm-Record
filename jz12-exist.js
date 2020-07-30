//判断在一个矩阵中是否存在一条包含某字符串所有字符的路径。

var exist = function(board, word) {
    const n = board.length, m = board[0].length;

    /**
     * 失败条件：超出矩阵边界 || 已经访问过；
     * 成功条件：没有失败 && k等于字符串长度；
     */
    let helper = function(i, j, k) {
        if(i<0 || i>=n || j<0 || j>=m || board[i][j] !== word[k]) return false;
        if(k === word.length - 1) return true;
        let cur = board[i][j];
        //记录已经访问的点
        board[i][j] = "-";
        //上下左右任一点成立则为true
        let res = helper(i+1, j, k+1) || helper(i-1,j,k+1) || helper(i,j+1,k+1) || helper(i,j-1,k+1);
        board[i][j] = cur;
        return res;
    }

    //遍历矩阵中每一个点进行回溯
    for (let i=0; i<n; i++) {
        for (let j=0; j<m; j++) {
            if(helper(i, j, 0)) return true;
        }
    }
    return false;
};

console.log(exist([["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]],"ABCCED"))