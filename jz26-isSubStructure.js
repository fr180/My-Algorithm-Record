//输入两棵二叉树A和B，判断B是不是A的子结构

//先序遍历
const isSubStructure = function(A, B) {
    //约定空树不是任意一个树的子结构
    if(!A || !B) return false;
    return isSame(A,B) || isSubStructure(A.left, B) || isSubStructure(A.right, B)
};

const isSame = function(A, B) {
    //如果B空了，则返回true
    if(B === null) return true;
    //如果A空了，则不是
    if(A === null) return false;
    if(A.val !== B.val) return false;
    return isSame(A.left, B.left) && isSame(A.right, B.right)
};