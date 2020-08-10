// 给定一个无重复元素的数组 candidates 和一个目标数 target ，找出 candidates 中所有可以使数字和为 target 的组合。
// candidates 中的数字可以无限制重复被选取。
const combinationSum = function(candidates, target) {
    let res = [];
    candidates.sort((a,b) => (a-b));
    const helper = function(nums, tmp, sum) {
        if(sum === target) {
            return res.push(tmp.slice());
        } else if (sum > target) {
            return;  
        }
        for(let i in nums) {
            if(target - sum < candidates[i]) break;
            sum += nums[i];
            tmp.push(nums[i])
            helper(nums.slice(i,), tmp, sum);
            sum -= nums[i];
            tmp.pop()
        }
    }
    helper(candidates, [], 0)
    console.log(res)
};

candidates = [2,3,5], target = 8;
combinationSum(candidates,target)