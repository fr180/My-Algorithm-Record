//给定一个二叉树，判断其是否是一个有效的二叉搜索树。
let TreeNode = require("./base/base").TreeNode

const isValidBST = function(root) {
    return isBST(root, -Infinity, Infinity)
};

const isBST = function(root, min, max) {
    if (root === null) {
        return true;
    }
    if (root.val <= min || root.val >= max) {
        return false;
    }
    return isBST(root.left, min, root.val) && isBST(root.right, root.val, max)
}

let root = new TreeNode(1)
root.left = new TreeNode(1)
console.log(isValidBST(root))