//输入两个递增排序的链表，
//合并这两个链表并使新链表中的节点仍然是递增排序的。

const mergeTwoLists = function(l1, l2) {
    let head = new ListNode(-1);
    let cur = head
    while (l1 && l2) {
        //判断，小的接在后面
        if(l1.val < l2.val) {
            cur.next = l1;
            l1 = l1.next;
        } else {
            cur.next = l2;
            l2 = l2.next;
        }
        cur = cur.next;
    }
    cur.next = l1 || l2;
    return head.next
};
