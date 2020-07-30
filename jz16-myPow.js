let myPow = function(x, n) {
    if(n === 0) return 1;
    else if(n === 1) return x;
    let res = 1;
    if(n<0) {
        x = 1/x;
    }
    while(n) {
        //为奇数则累乘到res；
        if(n%2 !== 0) {
            res *= x;
        }
        x **= 2;
        n = ~~(n/2);
    }
    console.log(res)
    return res;
};

//位运算
let myPow_I = function(x, n) {
    if(n === 0) return 1;
    else if(n === 1) return x;
    let res = 1;
    if(n<0) {
        x = 1/x;
    }
    while(n) {
        //为奇数（n最右位是1）则累乘到res
        if(n & 1) {
            res *= x;
        }
        x **= 2;
        n >>= 1; //右移一位
    }
    console.log(res)
    return res;
};
myPow_I(3,5)
