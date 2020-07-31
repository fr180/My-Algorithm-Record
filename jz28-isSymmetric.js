//二叉树是否对称

const isSymmetric = function(root) {
    if(!root) return true;
    return isMirror(root.left, root.right)
}

const isMirror = function(left, right) {
    if(!left && !right) return true;
    if(!left || !right || left.val !== right.val) {
        return false;
    }
    return isMirror(left.left, right.right) && isMirror(left.right, right.left)
}
