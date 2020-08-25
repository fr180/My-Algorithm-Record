//地上有一个m行n列的方格，从坐标 [0,0] 到坐标 [m-1,n-1] 。
//一个机器人从坐标 [0, 0] 的格子开始移动，
//它每次可以向左、右、上、下移动一格（不能移动到方格外），
//也不能进入行坐标和列坐标的数位之和大于k的格子。
//该机器人能够到达多少个格子？

let movingCount = function (n, m, k) {
    let queue = [], tmp = [], res = 0;
    //临时数组技术访问过的点
    for(let i = 0; i<n; i++) {
        tmp[i] = new Array(m).fill(0);
    }
    //初始化栈
    queue.push([0,0,0,0]);
    //栈为空停止
    while(queue.length) {
        let [i, j, si, sj] = queue.pop();
        if (i>=n || j>=m || k<(si+sj) || tmp[i][j]) {
            continue;
        }
        tmp[i][j] = 1;
        res++;
        //下面和右边入栈
        queue.push ([i+1, j, (i+1)%10===0? si-8 : si+1, sj], [i, j+1, si, (j+1)%10===0? sj-8 : sj+1])
    }
    console.log(res)
    return res;
}

