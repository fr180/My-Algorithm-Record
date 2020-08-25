// 给定一个字符串，你需要反转字符串中每个单词的字符顺序，同时仍保留空格和单词的初始顺序。

const reverseWords = function(s) {
    let res = '', temp = '';
    for( let i in s){
        if( s[i] == ' ' ){
            res += temp + ' '
            temp = ''
        }else {
            temp = s[i] + temp;
        }
    }
    return res + temp
    
    // let arr=s.split("").reverse().join("")
    // return arr.split(" ").reverse().join(" ")
};
reverseWords("asd gfg fewrew.")