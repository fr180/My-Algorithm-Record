// 给你两个单词 word1 和 word2，请你计算出将 word1 转换成 word2 所使用的最少操作数 。
// 可以对一个单词进行如下三种操作：
// 插入一个字符
// 删除一个字符
// 替换一个字符

// 动态规划
const minDistance = function(word1, word2) {
    let n = word1.length + 1, m = word2.length + 1;
    let dp = new Array(n).fill(0).map(()=>new Array(m).fill(0))
    for(let i=1; i<n; i++) {
        dp[i][0] = i;
    }
    for(let j=1; j<m; j++) {
        dp[0][j] = j;
    }
    for(let i=1; i<n; i++) {
        for(let j=1; j<m; j++) {
            if(word1[i-1] === word2[j-1]) {
                dp[i][j] = dp[i-1][j-1]
            } else {
                dp[i][j] = Math.min(dp[i-1][j-1], dp[i-1][j], dp[i][j-1]) + 1;
            }
        }
    }
    return dp[n-1][m-1]
};

// 优化空间复杂度
const minDistance_II = function(word1, word2) {
    let n = word1.length + 1, m = word2.length + 1;
    let dp = new Array(m).fill(0)
    for(let j=1; j<m; j++) {
        dp[j] = j;
    }
    for(let i=1; i<n; i++) {
        let tmp = dp[0];
        dp[0] = i;
        for(let j=1; j<m; j++) {
            let pre = tmp;
            tmp = dp[j]
            if(word1[i-1] === word2[j-1]) {
                dp[j] = pre;
            } else {
                dp[j] = Math.min(dp[j-1],dp[j],pre) + 1;
            }
        }
    }
   
    return dp[m-1]
};
minDistance_II("horse", "ros")
