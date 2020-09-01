// 给定一个整数 n，求以 1 ... n 为节点组成的二叉搜索树有多少种


// 动态规划 
// G(n)=f(1)+f(2)+...+f(n);f(i)=G(i−1)∗G(n−i);
// G(n)=G(0)∗G(n−1)+G(1)∗(n−2)+...+G(n−1)∗G(0)
// 卡塔兰数
const numTrees = function(n) {
    let dp = new Array(n + 1).fill(0);;
    dp[0] = 1, dp[1] = 1;
    for(let i=2; i<=n; i++) {
        for(let j=1; j<=i; j++) {
            dp[i] += dp[j-1] * dp[i-j]
        }
    }
    return dp[n];
};

numTrees(3)
// 数学
const numTrees_II = function(n) {
    let C = 1;
    for (let i = 0; i < n; ++i) {
        C = C * 2 * (2 * i + 1) / (i + 2);
    }
    return C;
};