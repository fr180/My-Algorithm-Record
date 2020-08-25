// 给定一个未经排序的整数数组，找到最长且连续的的递增序列，并返回该序列的长度

const findLengthOfLCIS = function(nums) {
    if(!nums.length) return 0;
    let low = 0, res = 1;
    for(let i=1; i<nums.length; i++) {
        if(nums[i] <= nums[i-1]) {
            low = i;
        }
        res = Math.max(res, i-low+1);
    }
    return res;
};

findLengthOfLCIS([1])
