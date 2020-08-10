// 输入一个整数数组，判断该数组是不是某二叉搜索树的后序遍历结果

// 递归 O(n^2)
const verifyPostorder = function(postorder) {
    const helper = function (i,j) {
        // i>=j，子节点遍历完
        if (i>=j) return true;
        // 划分左右子树
        let p = i;
        // 找到第一个大于根节点的节点，它左边为左子树
        while(postorder[p] < postorder[j]) {
            p++
        };
        let max = p;
        // 之后是否都大于根节点，若p=j则为真，找到右子树
        while(postorder[p] > postorder[j]) {
            p++;
        }
        // 判断p=j，判断左子树，右子树
        return p === j && helper(i, max-1) && helper(max, j-1);
    }
    return helper(0, postorder.length-1)
};

// 辅助栈 O(n)。
// 后序遍历的倒序为 “根、右、左” 顺序。
const verifyPostorder_I = function(postorder) {
    let stack = [], root = Number.MAX_VALUE;
    for (let i = postorder.length-1; i>=0; i--) {
        if (postorder[i] > root) return false;
        while (stack.length && postorder[i]<stack[stack.length-1]) {
            root = stack.pop()
        };
        stack.push(postorder[i])
    }
    return true;
}

verifyPostorder_I([4, 8, 6, 12, 16, 14, 10])