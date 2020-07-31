
let ListNode = require("./base/base").ListNode

//删除链表的节点, fa
var deleteNode = function(head, val) {
    if(head.val === val || head.next === null) return head.next;
    let p = head, tmp = head.next
    while(tmp) {
        if(tmp.val === val) {
            p.next = tmp.next;
            tmp.next = null;
            break;
        } else {
            p = p.next;
            tmp = tmp.next;
        }
    };
    return head;
};

/**
 * 书上原题
 * @param {ListNode} toDelete
 */
var deleteNode_II = function(head, toDelete) {
    if(!toDelete || !head) return null;
    if(!toDelete.next) {
        let pre = ListNode(-1);
        pre.next = head;
        let tmp = pre;
        while(tmp.next !== toDelete) {
            tmp = tmp.next;
        }
        tmp.next = null;
        return pre.next;
    } else {
        toDelete.val = toDelete.next.val;
        toDelete.next = toDelete.next.next;
    }
}
