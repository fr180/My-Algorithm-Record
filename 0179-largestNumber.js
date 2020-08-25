// 给定一组非负整数，重新排列它们的顺序使之组成一个最大的整数。

const largestNumber = function(nums) {
    nums.sort((a,b) => {
        let s1 = `${a}${b}`;
        let s2 = `${b}${a}`;
        return s2 - s1;
        // return `${b}${a}` - `${a}${b}`;
    })
    return nums[0] ? nums.join("") : "0"
};

largestNumber([3,30,34,5,9])