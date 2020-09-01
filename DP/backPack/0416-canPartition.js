// 给定一个只包含正整数的非空数组。
// 是否可以将这个数组分割成两个子集，使得两个子集的元素和相等。

const canPartition = function(nums) {
    let size = nums.reduce((pre, cur) => (pre + cur))
    if(size%2 !== 0) return false;
    size /= 2;
    let len = nums.length;
    let dp = new Array(size+1).fill(0);
    // let dp = new Array(size+1).fill(false);
    dp[0] = true;

    for(let i = 0; i < len; i++) {
        for(let j = size; j >= nums[i]; j--) {
            dp[j] = Math.max(dp[j], dp[j-nums[i]]+nums[i]);
            // dp[j] = dp[j] || dp[j-nums[i]]
        }
        console.log(dp)
    }
   
    return dp[size] === size
};

canPartition([1, 5, 11, 3])