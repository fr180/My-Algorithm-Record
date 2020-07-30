//打印从1到最大的n位数
//大数相加

let printNumbers = function(n) {
    let res = [], i=n-1;
    let count = new Array(n).fill(0)
    while(i>=0) {
        let tmp = count[i] + 1;
        //大于9则进位
        if(tmp > 9) {
            count[i--] = 0;
            continue;
        }
        count[i] = tmp;
        i = n-1;
        res.push(parseInt(count.join("")));
    };
    console.log(res)
    return res;
};
printNumbers(3)