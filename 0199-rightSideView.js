//给定一棵二叉树，想象自己站在它的右侧，按照从顶部到底部的顺序，返回从右侧所能看到的节点值。

const rightSideView = function(root) {
    if(!root) return [];
    let queue = [], res = [], tmp = [];
    queue.push(root)
    res
    while(queue.length) {
        res.push(queue[queue.length-1].val)
        for(let count = queue.length; count>0; count--) {
            let node = queue.shift();
            tmp.push(node.val)
            if(node.left) queue.push(node.left);
            if(node.right) queue.push(node.right);
        }
    }
    return res
};