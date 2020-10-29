// 二叉树的后序遍历，迭代
const TreeNode = require("../base/base").TreeNode

const postorderTraversal = function(root) {
    if(!root) return [];
    const queue = [], res = [];
    queue.push({node: root, flag: 0})
    while(queue.length) {
        const tmp = queue[queue.length - 1];
        if(tmp.flag === 1) {
            res.push(tmp.node.val);
            queue.pop()
        } else {
            const node = tmp.node;
            tmp.flag = 1;
            if(node.right) {
                queue.push({node: node.right, flag: 0})
            }
            if(node.left) {
                queue.push({node: node.left, flag: 0})
            }
        }
    }
    return res;
}
const root = new TreeNode(1);
root.right = new TreeNode(2);
root.right.left = new TreeNode(3)
postorderTraversal(root)