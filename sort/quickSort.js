// 平均O(nlogn) 最坏O(n^2) 最好O(nlogn) 不稳定

const quickSort = function(nums, left, right) {
    let len = nums.length;
    left = left ? left : 0, right = right ? right : 0;
    if(left < right) {
        let partitionIndex = partition(nums, left, right);
        quickSort(nums, left, partitionIndex-1);
        quickSort(nums, partitionIndex+1, right) 
    }
    return nums
}

const partition = function(nums, left, right) {
    let index = left + 1;
    for(let i = index; i <= right; i++) {
        if(nums[i] < nums[left]) {
            [nums[i], nums[index]] = [nums[index], nums[i]];
            index++;
        }
    }
    [nums[left], nums[index-1]] = [nums[index-1], nums[left]]
    return index - 1
}

console.log(quickSort([3,5,15,27,26,2,4,19,6,42,32], 0, 10))