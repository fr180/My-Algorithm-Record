// 给定n个大小为Ai，值为Vi的物品，和一个大小为m的背包。
// 你能放入背包的最大值是多少?

// dp[i][j]：前i个物品放入容量为j的背包的最大值
const backPackWithValue = function(A, V, m) {
    let len = A.length;
    if(len <= 0 ||  m <= 0) return 0;
    let dp = new Array(m+1).fill(0);
    for(let i=0; i<len; i++) {
        for(let j=m; j>=A[i]; j--) {
            dp[j] = Math.max(dp[j], dp[j-A[i]]+V[i]);
        }
    }
    console.log(dp)
    return dp[m]
}

let m = 10, A = [2, 3, 8], V = [2, 5, 8]
backPackWithValue(A,V,m)