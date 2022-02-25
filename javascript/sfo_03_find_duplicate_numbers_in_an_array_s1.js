/*
 * @Author: gochri
 * @Date: 2022-02-25 22:00:22
 * @FilePath: \LeetCode-Book\javascript\sfo_03_find_duplicate_numbers_in_an_array_s1.js
 * 
 */

// ===== Solution Code =====
var findRepeatNumber = function (nums) {
    let i = 0
    while (i < nums.length) {
        if (i === nums[i]) {
            i++
        } else {
            let j = nums[i]
            if (nums[j] === j) {
                return j
            } else {
                [nums[i], nums[j]] = [nums[j], nums[i]]
            }
        }
    }
    return -1
};

// ======= Test Case =======
let nums = [2, 3, 1, 0, 2, 5, 3]
// ====== Driver Code ======
let res = findRepeatNumber(nums)
console.log(res)