//上一题基础上取模1000000007

let cuttingRope = function(n) {
    if(n<4) return n-1;
    let res = 1;
    while(n > 4) {
        res = res * 3 % 1000000007;
        n -= 3
    }
    return res * n % 1000000007;


    // 有错：
    // if(n<4) return n-1;
    // let [a, b] = [~~(n/3) - 1,  n%3], x = 3, tmp = 1;
    // while(a>0) {
    //     if(a%2) {
    //         tmp = tmp * x % 1000000007;
    //     }
    //     x = x ** 2 % 1000000007
    //     a = ~~(a/2)
    // }

    // if (b === 0) return tmp * 3 % 1000000007;
    // else if(b===1) return tmp * 4 % 1000000007;
    // return tmp * 6 % 1000000007
};
console.log(cuttingRope(15))