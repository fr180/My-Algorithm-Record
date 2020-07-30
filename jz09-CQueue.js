// 用两个栈实现队列

var CQueue = function() {
    this.stack1 = [];
    this.stack2 = [];
};


CQueue.prototype.appendTail = function(value) {
    this.stack1.push(value);
};

 
CQueue.prototype.deleteHead = function() {
    if(!this.stack2.length) {
        while(this.stack1.length) {
            this.stack2.push(this.stack1.pop())
        }
    }
    return this.stack2.pop() || -1
};

/**
 * Your CQueue object will be instantiated and called as such:
 * var obj = new CQueue()
 * obj.appendTail(value)
 * var param_2 = obj.deleteHead()
 */