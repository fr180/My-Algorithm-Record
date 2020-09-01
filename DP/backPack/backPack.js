// 给定n个大小为Ai的物品，整数m表示背包的大小。这个背包最多能装多少

// 动态规划
// dp[i][j]：前i个物品放入容量为j的背包的最大重量
const backPack = function(A, m) {
    let len = A.length;
    if(len <= 0 ||  m <= 0) return 0;
    let dp = new Array(len+1).fill(0).map(() => new Array(m+1).fill(0));
    dp[0][0] = 0;
    for(let i=1; i<=len; i++) {
        for(let j=1; j<=m; j++) {
            if (i===0 && j===0) {
                continue;
            } else if (j-A[i-1]>=0) {
                dp[i][j] = Math.max(dp[i-1][j],dp[i-1][j-A[i-1]]+A[i-1]);
            } else {
                dp[i][j] = dp[i-1][j]
            }
        }
    }
    return dp[len][m]
}

// 优化空间复杂度度，一维dp
const backPack_II = function(A, m) {
    let len = A.length;
    if(len <= 0 ||  m <= 0) return 0;
    let dp = new Array(m+1).fill(0);
    for(let i=0; i<len; i++) {
        for(let j=m; j>=A[i]; j--) {
            dp[j] = Math.max(dp[j], dp[j-A[i]]+A[i]);
        }
    }
    console.log(dp)
    return dp[m]
}
backPack_II([1, 5, 11, 5], 11)