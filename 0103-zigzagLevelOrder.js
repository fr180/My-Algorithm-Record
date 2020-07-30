class TreeNode {
    constructor(val) {
        this.val = val;
        this.left = this.right = null;
    }
}

/**
 * 
 * 给定一个二叉树，返回其节点值的锯齿形层次遍历。
 * （即先从左往右，再从右往左进行下一层遍历，以此类推，层与层之间交替进行）
 * @param {TreeNode} root
 * @return {number[][]}
 */

// 层次遍历
const LevelOrder = function(root) {
    if(!root) return [];
    let res = [], tmp = [];
    tmp.push(root);
    while(tmp.length) {
        let node = tmp.shift();
        res.push(node.val);
        if(node.left) {
            tmp.push(node.left);
        }
        if(node.right) {
            tmp.push(node.right)
        } 
    }
    console.log(res)
};

// 锯齿层次遍历
const zigzagLevelOrder = function(root) {
    if(!root) return [];
    let res = [], queue = [], is_left = 1;
    queue.push(root)
    while(queue.length) {
        let tmp = [];
        let count = queue.length;
        while(count) {
            let node = queue.shift();
            tmp.push(node.val);
            if(node.left) {
                queue.push(node.left);
            }
            if(node.right) {
                queue.push(node.right);
            }
            count--;
        }
        res.push(is_left ? tmp : tmp.reverse);
        is_left = !is_left;
    }
    return res;
};

let root = new TreeNode(3);
root.left = new TreeNode(9)
root.right = new TreeNode(20);
root.left.left = new TreeNode(8);
root.left.right = new TreeNode(10);
root.right.left = new TreeNode(15);
root.right.right = new TreeNode(7);
zigzagLevelOrder(root)