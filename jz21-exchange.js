//将数组中所有奇数放到所有偶数前面
const exchange = function(nums) {
    let i = 0, j = 0;
    while(j < nums.length) {
        //如果为奇数，交换，i++
        if (nums[j] & 1) {
            [nums[i], nums[j]] = [nums[j], nums[i]];
            i++;
        }
        j++
    }
    console.log(nums)
    return nums
};


const exchange_II = function(nums) {
    let i = 0, j = nums.length - 1;
    while(i < j) {
        while (nums[i] % 2 !== 0) i++;
        if (nums[j] % 2 !== 0) {
            [nums[i], nums[j]] = [nums[j], nums[i]];
            i++;
        }
        j--
    }
    console.log(nums)
    return nums
};

exchange([1,2,3,4])