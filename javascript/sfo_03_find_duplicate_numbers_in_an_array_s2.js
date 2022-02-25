/*
 * @Author: gochri
 * @Date: 2022-02-25 22:00:22
 * @FilePath: \LeetCode-Book\javascript\sfo_03_find_duplicate_numbers_in_an_array_s2.js
 * 
 */

// ===== Solution Code =====
var findRepeatNumber = function (nums) {
    let set = new Set()
    for (let num of nums) {
        if (set.has(num)) {
            return num
        }
        else {
            set.add(num)
        }
    }
    return -1
};

// ======= Test Case =======
let nums = [2, 3, 1, 0, 2, 5, 3]
// ====== Driver Code ======
let res = findRepeatNumber(nums)
console.log(res)