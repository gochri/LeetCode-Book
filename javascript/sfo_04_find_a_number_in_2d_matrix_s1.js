/*
 * @Author: gochri(gochri@qq.com)
 * @Date: 2022-02-25 23:05:27
 * @FilePath: \LeetCode-Book\javascript\sfo_04_find_a_number_in_2d_matrix_s1.js
 */

// ===== Solution Code =====
var findNumberIn2DArray = function (matrix, target) {
    if (matrix.length === 0 || matrix[0].length === 0) return false;
    let i = 0;
    let j = matrix[0].length - 1;
    while (j >= 0 && i <= matrix.length - 1) {
        if (matrix[i][j] < target) { i++; }
        else if (matrix[i][j] > target) { j--; }
        else { return true; }
    }
    return false;
};

// ======= Test Case =======
let matrix = [
    [1, 4, 7, 11, 15],
    [2, 5, 8, 12, 19],
    [3, 6, 9, 16, 22],
    [10, 13, 14, 17, 24],
    [18, 21, 23, 26, 30]
]
let target = 5
// ====== Driver Code ======
let res = findNumberIn2DArray(matrix, target)
console.log(res)