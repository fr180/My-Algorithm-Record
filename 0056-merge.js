// 给出一个区间的集合，请合并所有重叠的区间。

const merge = function(intervals) {
    if(!intervals.length) return [];
    intervals.sort((a, b) => (a[0]-b[0]));
    let res = [intervals[0]] 
    for(let i in intervals) {
        let len = res.length - 1;
        if (res[len][1] >= intervals[i][0]) {
            res[len][1] = Math.max(res[len][1], intervals[i][1]);
        } else {
            res.push(intervals[i])
        }
    }
    return res;
};