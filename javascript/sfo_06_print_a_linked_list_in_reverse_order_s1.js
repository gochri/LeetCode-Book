/*
 * @Author: gochri(gochri@qq.com)
 * @Date: 2022-02-25 23:48:16
 * @FilePath: \LeetCode-Book\javascript\sfo_06_print_a_linked_list_in_reverse_order_s1.js
 */

var list_to_linked_list = require("./include/linked_list")

// ===== Solution Code =====
var reversePrint = function (head) {
    let getList = [];
    let ans = [];
    while (head) {
        getList.push(head.val)
        head = head.next
    }
    while (getList.length) {
        ans.push(getList.pop())
    }
    return ans
};

// ===== Test Case =====
let head = list_to_linked_list([1, 3, 2])
// ===== Driver Code =====
console.log(head)