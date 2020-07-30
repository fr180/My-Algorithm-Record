//给定一个正整数 n，将其拆分为至少两个正整数的和，
//并使这些整数的乘积最大化。 
//返回你可以获得的最大乘积。

var integerBreak = function(n) {
    if(n<3) return 1;
    if(n===3) return 2;
    let [a, b] = [~~(n/3),  n%3];
    if (b === 1) return Math.pow(3, a-1)*4;
    else if (b === 2) return Math.pow(3,a)*2;
    return Math.pow(3,a) * b;
};