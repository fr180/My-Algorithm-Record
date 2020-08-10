//给定一个 没有重复 数字的序列，返回其所有可能的全排列。

//回溯
var permute = function(nums) {
    let res = [];
    const len = nums.length;
    const helper = function(path) {
        if (path.length === len) {
            return res.push(path.slice());
        }
        for(let i in nums) {
            if(path.includes(nums[i])) continue;
            path.push(nums[i]);
            helper(path);
            path.pop()
        }
    }
    helper([]);
    console.log(res)
};

permute([1,2,3])