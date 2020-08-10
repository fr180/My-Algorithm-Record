//输入两个整数序列，第一个序列表示栈的压入顺序，
//请判断第二个序列是否为该栈的弹出顺序

const validateStackSequences = function(pushed, popped) {
    //定义一个辅助栈，模拟入栈出栈操作
    let stack = [], i = 0;
    for (let num of pushed) {
        stack.push(num);
        while (stack.length && stack[stack.length-1]===popped[i]) {
            stack.pop();
            i++
        }
    }
    // return stack.length === 0;
    console.log(stack.length === 0)
};

let pushed = [1,2,3,4,5], popped = [4,5,3,1,2];
validateStackSequences(pushed,popped)