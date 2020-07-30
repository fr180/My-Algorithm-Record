//反转链表
var ListNode = function(val) {
    this.val = val;
    this.next = null;
}

//双指针
const reverseList = function(head) {
    if(!head || !head.next) return head;
    let p = head.next;
    head.next = null;
    while(p) {
        let tmp = p.next;
        p.next = head;
        head = p;
        p = tmp;
    }
    return head;
};

//递归
let reverseList_II = function(head) {
    if(!head || !head.next) return head;
    let cur = reverseList_II(head.next);
    head.next.next = head;
    head.next = null;
    return cur;
}

let head = new ListNode(1);
head.next = new ListNode(2);
head.next.next = new ListNode(3);
head.next.next.next = new ListNode(4);
head.next.next.next.next = new ListNode(5);
reverseList_II(head)