// 寻找旋转排序数组中的最小值
//  数组中包含重复元素
const findMin = function(nums) {
    let i = 0, j = nums.length - 1;
    while(i < j) {
        let mid = ~~((i+j)/2);
        if(nums[mid] > nums[j]) i = mid+1;
        else if(nums[mid] < nums[j]) j = mid;
        else j--;
        
    }
    return nums[j];
};