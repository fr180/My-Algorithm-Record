// 数组中任意一个重复的数字

var findRepeatNumber = function(nums) {
    let map = new Map();
    for(let i in nums) {
        if(map.has(nums[i])) {
            return nums[i];
        }
        else map.set(nums[i]) 
    }
    return -1;
};

console.log(findRepeatNumber([1,3,1,0,2,5,3]))