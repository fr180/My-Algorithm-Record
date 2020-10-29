// 计数排序
const smallerNumbersThanCurrent = function(nums) {
    const tmp = new Array(101).fill(0);
    const res = [];
    for (let i = 0; i < nums.length; i++) {
        tmp[nums[i]] += 1;
    }
    for (let i = 1; i < 101; i++) {
        tmp[i] += tmp[i-1];   
    }
    
    for (let i = 0; i < nums.length; i++) {
        res.push(nums[i]? tmp[nums[i] - 1] : 0);
    }
    return res;
}
smallerNumbersThanCurrent([8,1,0,4,4,3])