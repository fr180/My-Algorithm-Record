// 给定一个数字，按照如下规则把它翻译为字符串：0 翻译成 “a” ，1 翻译成 “b”，……，11 翻译成 “l”，……，25 翻译成 “z”。
// 一个数字可能有多个翻译。请编程实现一个函数，用来计算一个数字有多少种不同的翻译方法

// 动态规划
// 若xi和x{i-1}组成的两位数字可以被翻译，则 dp[i] = dp[i - 1] + dp[i - 2]dp[i]=dp[i−1]+dp[i−2] ；
// 否则 dp[i] = dp[i - 1]dp[i]=dp[i−1] 


// 迭代遍历 O(n)
const translateNum = function(num) {
    let nums = num.toString();
    let a = 1, b = 1
    for(let i=1; i<nums.length; i++) {
        let tmp = nums[i-1]*10 + parseInt(nums[i])
        let c = tmp >=10 && tmp <= 25 ? a+b : b;
        [a, b] = [b, c];
    }
    return a;
};

// 求余,倒序
const translateNum_II = function(num) {
    let a = 1, b = 1, x = 0, y = num % 10;
    while(num !== 0) {
        num = ~~(num/10);
        x = num % 10;
        let tmp = x * 10 + y;
        let c = tmp >=10 && tmp <= 25 ? a+b : b;
        [a, b, y] = [b, c, x];
    }
};

translateNum(1235)