// 平均O(nlogn) 最坏O(nlogn) 最好O(nlogn) 稳定

// 把长度为n的输入序列分成两个长度为n/2的子序列；
// 对这两个子序列分别采用归并排序；
// 将两个排序好的子序列合并成一个最终的排序序列。

const mergeSort = function(nums) {
    let len = nums.length;
    if(len < 2) {
        return nums;
    }
    let mid = ~~(len/2);
    let left = nums.slice(0, mid), right = nums.slice(mid)
    return merge(mergeSort(left), mergeSort(right));
}

const merge = function(left, right) {
    let res = [];
    while(left.length > 0 && right.length > 0) {
        res.push (left[0] < right[0]? left.shift() : right.shift())
    }
    while(left.length) {
        res.push(left.shift())
    }
    while(right.length) {
        res.push(right.shift())
    }
    return res;
}

console.log(mergeSort([3,5,15,27,26,2,4,19,6,42,32]))