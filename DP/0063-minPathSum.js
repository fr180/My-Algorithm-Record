// 给定一个包含非负整数的 m x n 网格，请找出一条从左上角到右下角的路径，使得路径上的数字总和为最小。
// 每次只能向下或者向右移动一步。

// 动态规划：dp[i][j] = Math.min(dp[i-1][j], dp[i][j-1]) + grid[i][j];
const minPathSum = function(grid) {
    let dp = [], n = grid.length, m = grid[0].length;
    dp[0] = new Array(m).fill(grid[0][0])
    for(let i = 1; i < n; i++) {
        if(i>0) dp[i] = [];
        dp[i][0] = dp[i-1][0] + grid[i][0]; 
    }
    for(let i = 1; i < m; i++) {
        dp[0][i] = dp[0][i-1] + grid[0][i]

    }
    for(let i = 1; i < n; i++) {
        for(let j = 1; j < m; j++) {
            dp[i][j] = Math.min(dp[i-1][j], dp[i][j-1]) + grid[i][j];
        }
    }
    return dp[n-1][m-1]
};

let grid = [[1,2,5],[3,2,1]]
minPathSum(grid)