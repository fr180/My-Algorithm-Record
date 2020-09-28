// 平均O(n^2) 最坏O(n^2) 最好O(n) 稳定

const bubbleSort = function(nums) {
    let len = nums.length
    for(let i=1; i<len; i++) {
        for(let j=1; j<len; j++) {
            if(nums[j-1] > nums[j]) {
                [nums[j-1], nums[j]] = [nums[j], nums[j-1]]; 
            }
        }
    }
    console.log(nums)
}

bubbleSort([3,5,15,27,26,2,4,19,6,42,32])