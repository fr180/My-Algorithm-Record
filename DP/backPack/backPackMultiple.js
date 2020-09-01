// 有n个物品，每种物品有N[i]个，每个物品的重量为A[i]，每个物品的价值为V[i]。
// 现在有一个背包，它所能容纳的重量为m，

const backPackMultiple = function(N, A, V, m) {
    let len = A.length
    let dp = new Array(m+1).fill(0);

    for(let i=0; i<len; i++) {
        for(let j=m; j>=A[i]; j--) {
            let count = Math.min(~~(j/A[i]), N[i])
            for(let k=0; k<=count; k++) {
                dp[j] = Math.max(dp[j], dp[j-k*A[i]]+k*V[i]);
            }
        }
    }
    console.log(dp)
    return dp[m]
}
let A = [5 ,4 ,7 ,2 ,6],V = [12 ,3 ,10, 3 ,6],N = [2,4,1,5,3], m =15
backPackMultiple(N,A,V,m)