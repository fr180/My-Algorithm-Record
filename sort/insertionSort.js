// 平均O(n^2) 最坏O(n^2) 最好O(n) 稳定
// 对于未排序数据，在已排序序列中从后向前扫描，找到相应位置并插入。

const insertionSort = function(nums) {
    let len = nums.length;
    for(let i = 1; i < len; i++) {
        let tmp = nums[i];
        let j = i - 1;
        while(j>=0 && nums[j]>tmp) {
            nums[j+1] = nums[j--]
        }
        nums[j+1] = tmp

    }
    console.log(nums)
}
insertionSort([3,5,15,27,26,2,4,19,6,42,32])