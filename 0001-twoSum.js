// 给定一个整数数组 nums 和一个目标值 target，
// 请在该数组中找出和为目标值的那 两个 整数，并返回他们的数组下标。
// 假设每种输入只会对应一个答案。
// 但是，数组中同一个元素不能使用两遍。

const twoSum = function(nums, target) {
    let map = new Map();
    for (let i in nums) {
        if (map.has(nums[i])) {
            return [map.get(nums[i]), i]
        } else {
            map.set(target-nums[i], i)
        }
    }
    return [];
};

let nums = [2, 7, 11, 15], target = 9;
console.log(twoSum(nums, target))