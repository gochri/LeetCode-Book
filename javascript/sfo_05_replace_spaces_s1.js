/*
 * @Author: gochri(gochri@qq.com)
 * @Date: 2022-02-25 23:37:13
 * @FilePath: \LeetCode-Book\javascript\sfo_05_replace_spaces_s1.js
 */

// ===== Solution Code =====
var replaceSpace = function (s) {
    let str = []
    for (let i = 0; i < s.length; i++) {
        if (s[i] === ' ') { str.push('%20') } 
        else { str.push(s[i]) }
    }
    return str.join('')
};

// ===== Test Case =====
let s = "We are happy."
// ===== Driver Code =====
let res = replaceSpace(s)
console.log(res)