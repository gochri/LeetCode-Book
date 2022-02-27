/*
 * @Author: gochri(gochri@qq.com)
 * @Date: 2022-02-26 00:09:15
 * @FilePath: \LeetCode-Book\javascript\include\linked_list.js
 */
//  Definition for singly-linked list.
function ListNode(val) {
    this.val = val;
    this.next = null;
}

export function list_to_linked_list(arr){
    let head = ListNode(0)
    let node = head
    for(let i of arr){
        let cur = ListNode(i)
        node.next = cur
        node = node.next
    }
    return head.next
}