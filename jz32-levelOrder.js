class TreeNode {
    constructor(val) {
        this.val = val;
        this.left = this.right = null;
    }
}


/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var levelOrder = function(root) {
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
var levelOrder_II = function(root) {
    if (!root) return [];
    let queue = [], tmp = [], res = [];
    queue.push(root);
    while(queue.length) {
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

var levelOrder_III = function(root) {
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



let root = new TreeNode(3);
root.left = new TreeNode(9)
root.right = new TreeNode(20);
root.left.left = new TreeNode(8);
root.left.right = new TreeNode(10);
root.right.left = new TreeNode(15);
root.right.right = new TreeNode(7);
levelOrder_III(root)