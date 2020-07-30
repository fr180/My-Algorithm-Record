//在BST中找到节点值等于给定值的节点。 返回以该节点为根的子树。 

var TreeNode = function(val) {
    this.val = val;
    this.left = this.right = null;
}

const searchBST = function(root, val) {
    if(!root) return null;
    if(root.val === val) return root;
    if(root.val < val) return searchBST(root.right, val);
    if(root.val > val) return searchBST(root.left, val)
};

let root = new TreeNode(4);
root.left = new TreeNode(2);
root.left.left = new TreeNode(1);
root.right = new TreeNode(7)

console.log(searchBST(root, 2))