//给定一个二叉树，判断其是否是一个有效的二叉搜索树。
var TreeNode = function(val) {
    this.val = val;
    this.left = this.right = null;
}

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