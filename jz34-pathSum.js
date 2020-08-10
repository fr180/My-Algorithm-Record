// 二叉树中和为某一值的路径
let TreeNode = require("./base/base").TreeNode

const pathSum = function(root, sum) {
    let res = [], tmp = [];
    const helper = function(root, target) {
        if(!root) return;
        tmp.push(root.val)
        target += root.val;
        if(target === sum && !root.right && !root.left) {
            res.push(tmp.slice())
        }
        helper(root.left, target);
        helper(root.right, target);
        tmp.pop();
    }
    helper(root, 0)
    console.log(res)
    return res;
};

let root = new TreeNode(5);
root.left = new TreeNode(4)
root.left.left = new TreeNode(17)
root.right = new TreeNode(8)
root.right.left = new TreeNode(13)
root.right.right = new TreeNode(4)

pathSum(root, 26)