let TreeNode = require("./base/base").TreeNode

/**
 * @param {TreeNode} root
 * @return {number[]}
 */

 //二叉树的层次遍历
const levelOrder = function(root) {
    if (!root) return [];
    let queue = [], res = [];
    queue.push(root)
    while (queue.length) {
        let node = queue.shift();
        res.push(node.val);
        if(node.left) queue.push(node.left);
        if(node.right) queue.push(node.right)
    }
    return res
};


//从上到下按层打印二叉树，同一层的节点按从左到右的顺序打印，每一层打印到一行。
const levelOrder_II = function(root) {
    if (!root) return [];
    let queue = [], tmp = [], res = [];
    queue.push(root);
    while(queue.length) {
        //记录每一行的节点数
        let count = queue.length;
        while(count) {
            let node = queue.shift();
            tmp.push(node.val) 
            if(node.left) queue.push(node.left);
            if(node.right) queue.push(node.right);
            count--;
        }
        res.push(tmp);
        tmp = [];
    }
    return res
};

//即奇数层按照从左到右的顺序打印，偶数层按照从右到左的顺序打印
const levelOrder_III = function(root) {
    if (!root) return [];
    let queue = [], tmp = [], res = [], flag = 1;
    queue.push(root);
    while(queue.length) {
        let count = queue.length;
        while(count) {
            let node = queue.shift();
            tmp.push(node.val);
            if(node.left) queue.push(node.left);
            if(node.right) queue.push(node.right);
            count--;
        }
        flag? res.push(tmp) : res.push(tmp.reverse());
        flag = !flag;
        tmp = [];
    }
    return res
};

