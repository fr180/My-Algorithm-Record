// 平均O(n^2) 最坏O(n^2) 最好O(n^2) 不稳定

// 首先在未排序序列中找到最小（大）元素，存放到排序序列的起始位置，然后，再从剩余未排序元素中继续寻找最小（大）元素，然后放到已排序序列的末尾。
const selectionSort = function(nums) {
    let len = nums.length
    for(let i = 0; i < len; i++) {
        index = i
        for(let j=i+1; j < len; j++) {
            if(nums[index] > nums[j]) {
                index = j;
            }
        }
        [nums[i], nums[index]] = [nums[index], nums[i]]
    }
    console.log(nums)
}

selectionSort([3,5,15,27,26,2,4,19,6,42,32])