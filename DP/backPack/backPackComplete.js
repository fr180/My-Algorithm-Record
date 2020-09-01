// 有n种物品，每种物品有无限个，每种物品的重量为A[i]，每种物品的价值为value[i]。
// 现在有一个背包，它所能容纳的重量为m;

const backPackComplete = function(A, V, m) {
    let len = A.length
    let dp = new Array(m+1).fill(0);

    for(let i=0; i<len; i++) {
        // 无限，所以正序遍历
        for(let j=A[i]; j<=m; j++) {
            dp[j] = Math.max(dp[j], dp[j-A[i]]+V[i]);
        }
    }
    console.log(dp)
    return dp[m]
}