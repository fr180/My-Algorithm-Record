// 给定两个大小为 m 和 n 的正序（从小到大）数组 nums1 和 nums2
// 请你找出这两个正序数组的中位数
// 要求算法的时间复杂度为 O(log(m + n))。
const findMedianSortedArrays = function(nums1, nums2) {
    if(nums1.length > nums2.length) {
        [nums1, nums2] = [nums2, nums1]
    }
    let len1 = nums1.length, len2 = nums2.length;
    let mid = ~~((len1+len2+1)/2), min = 0, max = len1;
    while(max >= min) {
        // nums1的中点
        let i = ~~((max+min)/2);
        // nums2的中点
        let j = mid - i;
        if(i>min && nums1[i-1] < nums2[j]) {
            max = i-1;
        } else if(i<max && nums1[i] < nums2[j-1]) {
            min = i+1;
        } else {
            let left, right;
            if(i===0) {
                left = nums2[j-1]
            } else if(j===0) {
                left = nums1[i-1]
            } else {
                left = Math.max(nums1[i-1], nums2[j-1])
            }

            if(i===len1) {
                right = nums2[j]
            } else if(j===len2) {
                right = nums1[i]
            } else {
                right = Math.min(nums1[i], nums2[j])
            }
            return (len1+len2) % 2 ? left : (left+right)/2
        }
    }
    return 0;

};

findMedianSortedArrays([1,2], [-1,3])