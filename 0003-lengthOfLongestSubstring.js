// 给定一个字符串，请你找出其中不含有重复字符的 最长子串 的长度。

const lengthOfLongestSubstring = function(s) {
    if(!s.length) return 0;
    let map = new Map(), max = 0;
    for(let i=0, j=0; j<s.length; j++) {
        if(map.has(s[i])) {
            i = Math.max(map.get(s[i]), i)
        }
        max = Math.max(max, j-i+1);
        map.set(s[i],j)
    }
    return max;
};

lengthOfLongestSubstring("abcabcbb")