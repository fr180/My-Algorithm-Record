// 反转一个单链表。
const reverseList = function(head) {
    if(!head || !head.next) return head;
    let p = head.next;
    head.next = null;
    while(p) {
        let tmp = p.next;
        p.next = head;
        [head, p] = [p, tmp]
    }
    return head;
};