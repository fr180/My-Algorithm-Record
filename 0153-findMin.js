// 寻找旋转排序数组中的最小值
// 不包含重复元素

const minArray = function(numbers) {
    let i = 0, j = numbers.length - 1;
    while(i < j) {
        let mid = ~~((i+j)/2);
        if(numbers[mid] > numbers[j]) i = mid+1;
        else if(numbers[mid] < numbers[j]) j = mid;
        // else j--;
    }
    return numbers[j];
};