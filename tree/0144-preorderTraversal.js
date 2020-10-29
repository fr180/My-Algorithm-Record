// 二叉树的前序遍历，迭代
const TreeNode = require("../base/base").TreeNode

const preorderTraversal = function(root) {
    if(!root) return [];
    const queue = [], res = [];
    queue.push(root)
    while(queue.length) {
        const node = queue.pop();
        res.push(node.val);
        if(node.right) queue.push(node.right);
        if(node.left) queue.push(node.left)
    }
    console.log(res);
};

const root = new TreeNode(1);
root.right = new TreeNode(2);
root.right.left = new TreeNode(3)
preorderTraversal(root)