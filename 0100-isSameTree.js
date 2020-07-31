// 给定两个二叉树，编写一个函数来检验它们是否相同。


//二叉树算法设计的总路线：
//把当前节点要做的事做好，其他的交给递归框架，不用当前节点操心。
//如果当前节点会对下面的子节点有整体影响，可以通过辅助函数增长参数列表，借助参数传递信息。
let TreeNode = require("./base/base").TreeNode

const isSameTree = function(p, q) {
    if(p === null && q === null) {
        return true;
    }
    if(p === null || q === null) {
        return false;
    }
    if(p.val !== q.val) {
        return false;
    }
    return isSameTree(p.right, q.right) && isSameTree(p.left, q.left)
    // return isSameTree(p.right, q.right) && isSameTree(p.left, q.left) && p.val === q.val
};