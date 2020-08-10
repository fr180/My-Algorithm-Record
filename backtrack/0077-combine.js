// 给定两个整数 n 和 k，返回 1 ... n 中所有可能的 k 个数的组合。
const combine = function(n, k) {
    let res = [];
    const helper = function(tmp, start = 1) {
        if(tmp.length === k) {
            return res.push(tmp.slice());
        }
        for(let i = start; i <= n; i++) {
            tmp.push(i);
            helper(tmp, i+1);
            tmp.pop();
        }
    }
    helper([])
    console.log(res)
};

combine(4,2)