//旋转数组的最小数字

var minArray = function(numbers) {
    let i = 0, j = numbers.length - 1;
    while(i < j) {
        let mid = ~~((i+j)/2);
        if(numbers[mid] > numbers[j]) i = mid+1;
        else if(numbers[mid] < numbers[j]) j = m;
        else j--;
    }
    return numbers[j];
};

console