// 给定一组不含重复元素的整数数组 nums，返回该数组所有可能的子集（幂集）。
// 解集不能包含重复的子集。
const subsets = function(nums) {
    let res = [];
    const helper = function(index = 0, tmp = []) {
        res.push(tmp.slice());
        for(let i=index; i<nums.length; i++) {
            tmp.push(nums[i]);
            helper(i+1, tmp);
            tmp.pop();
        }
    }
    return res;
};

subsets([1,2,3])