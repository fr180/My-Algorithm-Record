class TreeNode {
    constructor(val) {
        this.val = val;
        this.left = this.right = null;
    }
}

/**
 * 给定一个二叉树，返回它的中序 遍历。
 * 
 * @param {TreeNode} root
 * @return {number[]}
 */


//递归
let inorderTraversal = function(root) {
    let res = [];
    let helper = function(root) {
        if(root){
            if(root.left) helper(root.left, res);
            res.push(root.val);
            if(root.right) helper(root.right, res)
        }
    }
    helper(root, res);
    return res;
};

//栈
let inorderTraversal_stark = function(root) {
    let stark = [], res = [];
    while(root || stark.length > 0) {
        while(root) {
            stark.push(root);
            root = root.left;
        }
        root = stark.pop();
        res.push(root.val);
        root = root.right;
    }
    return res;
}




let root = new TreeNode(1);
root.right = new TreeNode(2);
root.right.left = new TreeNode(3);

inorderTraversal_stark(root)