//反转链表

let ListNode = require("./base/base").ListNode

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
