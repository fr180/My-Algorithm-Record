//链表中倒数第k个节点

//一个指针走前面
let ListNode = require("./base/base").ListNode

const getKthFromEnd = function(head, k) {
    let fast = head, pre = head;
    let i = 0;
    while(i < k) {
        fast = fast.next;
        i++;
    } 
    while(fast) {
        pre = pre.next;
        fast = fast.next;
    } 
    return pre
};
