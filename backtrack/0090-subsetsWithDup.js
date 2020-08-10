// 给定一组包含重复元素的整数数组 nums，返回该数组所有可能的子集（幂集）。
// 解集不能包含重复的子集。
const subsetsWithDup = function(nums) {
    let res = [];
    // 排序，方便之后同层去重。
    nums.sort((a, b) => (a-b))
    const helper = function(index = 0, tmp = []) {
        res.push(tmp.slice());
        for(let i=index; i<nums.length; i++) {
            if(i > index && nums[i]===nums[i-1]) continue;
            tmp.push(nums[i]);
            helper(i+1, tmp);
            tmp.pop();
        }
    }
    helper();
    console.log(res)
    return res;
};

subsetsWithDup([4,4,4,1,4])