// 给定一个整型数组，在数组中找出由三个数组成的最大乘积，并输出这个乘积。

// 排序 O(nlogn)
const maximumProduct = function(nums) {
    nums.sort((a,b) => (a-b));
    let len = nums.length
    return Math.max(nums[len-1]*nums[len-2]*nums[len-3], 
        nums[len-1]*nums[0]*nums[1]);
};

// 遍历，找到数组的第一大的值，第二大的值，第三大的值，第一小的值和第二小的值
const maximumProduct_II = function(nums) {
    let min1 = Infinity, min2 = Infinity;
    let max1 = -Infinity, max2 = -Infinity, max3 = -Infinity;
    for(let i of nums) {
        if(i > max1) {
            [max1, max2, max3] = [i, max1, max2];
        } else if(i > max2) {
            [max2, max3] = [i, max2];
        } else if(i > max3) {
            max3 = i;
        };

        if(i < min1) {
            [min1, min2] = [i, min1];
        } else if(i < min2) {
            min2 = i;
        }
    }

    return Math.max(max1*max2*max3, max1*min1*min2);
};

maximumProduct_II([4,2,3])