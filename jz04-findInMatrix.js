//在一个二维数组中（每个一维数组的长度相同），
//每一行都按照从左到右递增的顺序排序，
//每一列都按照从上到下递增的顺序排序。
//请完成一个函数，输入这样的一个二维数组和一个整数，判断数组中是否含有该整数。

function Find(target, array)
{    
    if(!array.length || !array[0].length) return false;
    let i = 0, j = array.length - 1;
    console.log(i,j)
    while(i<array.length && j >=0) {
        if(array[i][j] > target) {
            j--;
        } else if (array[i][j] < target) {
            i++;
        } else return true;
    }
    return false
    // write code here
}

console.log(Find(16, [[]]))