// 平均O(n^1.3) 最坏O(n^2) 最好O(n) 不稳定

const shellSort = function(nums) {
    let len = nums.length;
    for(let gap = Math.floor(len/2); gap>0; gap = Math.floor(gap/2)) {
        for(let i = gap; i < len; i++) { 
            let tmp = nums[i];
            let j = i;
            while (j - gap >=0 && nums[j - gap] > tmp) {
                nums[j] = nums[j-gap];
                j = j - gap;
            }
            nums[j] = tmp;
        }
    }
    console.log(nums)
}

shellSort([3,5,15,27,26,2,4,19,6,42,32])