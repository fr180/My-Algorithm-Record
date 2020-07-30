//二进制中1的个数

let hammingWeight = function(n) {
    let res = 0;
    while(n) {
        res++;
        n = n & (n-1)
    }
    console.log(res)
    return res;
};

hammingWeight(11111111111111111111111111111101)
