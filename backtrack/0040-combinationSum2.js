// 给定一个数组 candidates 和一个目标数 target ，找出 candidates 中所有可以使数字和为 target 的组合。
// candidates 中的每个数字在每个组合中只能使用一次。
const combinationSum = function(candidates, target) {
    let res = [];
    candidates.sort((a,b) => (a-b));
    const helper = function(tmp, sum, index) {
        if(sum === target) {
            return res.push(tmp.slice());
        } else if (sum > target) {
            return;  
        }
        for(let i=index; i<candidates.length; i++) {
            if(target - sum < candidates[i]) break;
            if(i>index && candidates[i-1] === candidates[i]) continue;
            sum += candidates[i];
            tmp.push(candidates[i])
            helper(tmp, sum, i + 1);
            sum -= candidates[i];
            tmp.pop()
        }
    }
    helper([], 0, 0)
    console.log(res)
};
candidates = [10,1,2,7,6,1,5], target = 8;
combinationSum(candidates,target)