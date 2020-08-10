//顺时针打印矩阵

//遍历到底
//每遍历完一条边，下一条边遍历的起点被“挤占”，所以要更新相应的边界
const spiralOrder = function(matrix) {
    if(!matrix.length) return [];
    let res = [];
    let i = 0, j = 0, n = matrix.length-1, m = matrix[0].length-1;
    while(i<=n && j<=m) {
        for (let k=j; k<=m; k++) {
            res.push(matrix[i][k]);
        }
        i++;
        for (let k=i; k<=n; k++) {
            res.push(matrix[k][m]);
        }
        m--;
        if (i > n || j > m) break
        for (let k=m; k>=j; k--) {
            res.push(matrix[n][k]);
        }
        n--;
        for (let k=n; k>=i; k--) {
            res.push(matrix[k][j]);
        }
        j++;
    }
    console.log(res)
};

let matrix = []
spiralOrder(matrix)