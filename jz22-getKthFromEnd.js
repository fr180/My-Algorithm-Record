//链表中倒数第k个节点

//一个指针走前面
var ListNode = function(val) {
    this.val = val;
    this.next = null;
}
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

let head = new ListNode(1);
head.next = new ListNode(2);
head.next.next = new ListNode(3);
head.next.next.next = new ListNode(4);
head.next.next.next.next = new ListNode(5);
getKthFromEnd(head, 2)
