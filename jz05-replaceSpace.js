//请实现一个函数，把字符串 s 中的每个空格替换成"%20"

//正则
var replaceSpace = function(s) {
    return s.replace(/\s/g, "%20")
};


var replaceSpace_II = function(s) {
    return s.split(" ").join("%20")
}

var replaceSpace_III = function(s) {
    s = s.split("")
    for(let i in s) {
        if(s[i] === " ") {
            console.log(s[i])
            s[i] = "%20"
        }
    }
    return s.join("")
};
console.log(replaceSpace("we are happy"))