//  输入某二叉树的前序遍历和中序遍历的结果，请重建该二叉树

let TreeNode = require("./base/base").TreeNode


var buildTree = function(preorder, inorder) {
    if(!preorder.length || !inorder.length) return null
    let cur = preorder[0];
    let root = new TreeNode(cur);
    let index = inorder.indexOf(cur)
    root.left =  buildTree(preorder.slice(1,index+1), inorder.slice(0,index));
    root.right = buildTree(preorder.slice(index+1), inorder.slice(index+1));
    return root
};