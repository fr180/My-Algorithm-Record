//请实现一个函数用来判断字符串是否表示数值（包括整数和小数）

var isNumber = function(s) {
    if (!s || s.length === 0) {
        return false;
    }
    let num = false, dot = false, e = false;
    s = s.trim();
    for(let i = 0; i < s.length; i++) {
        if(s[i] >= "0" && s[i] <= "9") {
            console.log(s[i])
            num = true;
        } else if (s[i] === ".") {
            //.之前不能出现.或者e
            if(dot || e) return false;
            dot = true;
        } else if (s[i] === "e" || s[i] === "E") {
            //e/E只能有一个，前面必须有数字
            if (e || !num) return false;
            e = true;
            //重置num，确保e之后也出现数。
            num = false
        } else if (s[i] === "-" || s[i] === "+") {
            // -/+只能出现在字符串开始或者e/E后面第一个；
            if(i!=0 && s[i-1] !== "e" && s[i-1] !== "E") return false;
        } else {
            return false
        }
    }
    console.log(num)
    return num;
}
isNumber(". 1")