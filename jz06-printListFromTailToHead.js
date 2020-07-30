//从头到尾打印链表

function ListNode(x){
    this.val = x;
    this.next = null;
}

//栈，返回数组
function printListFromTailToHead(head) {
    let res = [];
    while(head) {
        res.unshift(head.val);
        head = head.next;
    }
    return res;
}

//递归，反转链表
function reverseLink(head) {
    if (head === null || head.next === null) return head
    const p = reverseLink(head.next)
    head.next.next = head // 指针反转
    head.next = null
    return p // 返回真正的表头
}

//反转链表
function reverseLink_II(head) {
    if (head === null || head.next === null) return head
    let p = head.next;
    head.next = null;
    let tmp = 0;
    while(p !== null) {
        tmp = p.next;
        p.next = head;
        head = p;
        p = tmp;
    }
    return head;
}

let head = new ListNode(1);
head.next = new ListNode(2);
head.next.next = new ListNode(3)
console.log(reverseLink(head))