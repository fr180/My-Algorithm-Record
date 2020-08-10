// 给定一个可包含重复数字的序列，返回所有不重复的全排列。

const permuteUnique = function(nums) {
    let res = [], len = nums.length;
    nums.sort((a, b) => (a-b));
    const helper = function(path, visited) {
        if (path.length === len) {
            return res.push(path.slice());
        }
        for (let i in nums) {
            if(visited[i]) {
                continue;
            }
            if(i>0 && nums[i]===nums[i-1] && !visited[i-1]) {
                continue;
            }
            visited[i] = true;
            path.push(nums[i]);
            helper(path, visited);
            visited[i] = false;
            path.pop();
        }
    }
    helper([], []);
    return res;
};