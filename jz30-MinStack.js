// 包含min函数的栈


//定义栈的数据结构，在该类型中实现一个能够得到栈的最小元素的 min 函数在该栈中，
//调用 min、push 及 pop 的时间复杂度都是 O(1)。

//定义两个栈，一个正常存放，一个存放降序元素
const MinStack = function() {
    this.stack = [];
    this.minStack = [];
};

MinStack.prototype.push = function(x) {
    this.stack.push(x);
    if(!this.minStack.length || this.minStack[this.minStack.length-1] >= x) {
        this.minStack.push(x);
    }
};

MinStack.prototype.pop = function() {
    if(this.stack.pop() === this.minStack[this.minStack.length-1]) {
        this.minStack.pop()
    }
};

MinStack.prototype.top = function() {
    return this.stack[this.stack.length-1]
};

MinStack.prototype.min = function() {
    return this.minStack[this.minStack.length-1];
};
