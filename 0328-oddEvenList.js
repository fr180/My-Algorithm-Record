// 给定一个单链表，把所有的奇数节点和偶数节点分别排在一起。

let ListNode = require("./base/base").ListNode;

const oddEvenList = function(head) {
    if(!head) return head;
    let odd = head, even = head.next, evenHead = head.next;
    while(even && even.next) {
        odd.next = even.next;
        odd = odd.next;
        even.next = odd.next;
        even = even.next
    }
    odd.next = evenHead;
    return head;
};

