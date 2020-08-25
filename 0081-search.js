// 搜索旋转排序数组
// 存在重复的元素。
// 算法时间复杂度必须是 O(log n) 级别。

const search = function(nums, target) {
    if(!nums.length) return false;
    let lo = 0, hi = nums.length - 1;
    while(lo <= hi) {
        let mid = ~~((lo+hi)/2);
        if(nums[mid] === target) return true;
        if(nums[lo] === nums[mid]) {
            lo++;
        } else if(nums[lo] < nums[mid]) { // 前半有序
            // 判断 target 是在 mid 的左边还是右边，从而调整左右边界 lo 和 hi
            if(target >= nums[lo] && target < nums[mid]) {
                hi = mid - 1;
            } else {
                lo = mid + 1;
            }
        } else { // 前半有旋转
            if(target > nums[mid] && target <= nums[hi]) {
                lo = mid + 1;
            } else {
                hi = mid - 1;
            }
        }
    }
    return false
};

search([4,5,6,7,0,1,2],0)