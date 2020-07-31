let TreeNode = require("./base/base").TreeNode

//递归
const mirrorTree = function(root) {
    if(!root) return null;
    let left = mirrorTree(root.right);
    let right = mirrorTree(root.left);
    root.left = left;
    root.right = right;
    return root
};

