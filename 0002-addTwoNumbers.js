// 给出两个 非空 的链表用来表示两个非负的整数。
// 其中，它们各自的位数是按照 逆序 的方式存储的，并且它们的每个节点只能存储 一位 数字。

let ListNode = require("./base/base").ListNode

const addTwoNumbers = function(l1, l2) {
    let head = new ListNode(null);
    let p = head, flag = 0;
    while(l1 || l2 || flag) {
        let sum = (l1? l1.val : 0) + (l2? l2.val : 0) + flag;
        flag = sum > 9 ? 1 : 0;
        p.next = new ListNode(sum%10);
        l1 && (l1=l1.next);
        l2 && (l2=l2.next);
        p = p.next;
    }
    return head.next
};