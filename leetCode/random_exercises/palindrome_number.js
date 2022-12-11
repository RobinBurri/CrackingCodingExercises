/**
 * 9. Palindrome Number EASY
 * ? Given an integer x, return true if x is a palindrome and false otherwise.
* ! Follow up: Could you solve it without converting the integer to a string?
Input: x = 121
Output: true
Explanation: 121 reads as 121 from left to right and from right to left.
Example 2:

Input: x = -121
Output: false
Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.
Example 3:

Input: x = 10
Output: false
Explanation: Reads 01 from right to left. Therefore it is not a palindrome.

 */

/**
 * @param {number} x
 * @return {boolean}
 */
// var isPalindrome = function (x) {
//     let xString = x.toString()
//     console.log(xString)
//     let i = 0
//     let j = xString.length - 1
//     console.log(i, j)
//     while (i <= j) {
//         if (xString[i] !== xString[j]) {
//             console.log(`Is not equal: ${xString[i]}, ${xString[j]}`)
//             return false
//         }
//         i++
//         j--
//     }
//     return true
// }

// console.log(isPalindrome(121))
// console.log(isPalindrome(-121))
// console.log(isPalindrome(10))

// Follow up: Could you solve it without converting the integer to a string?
var isPalindrome2 = function (num) {
    let digits = 0
    let n = num
    while (n >= 1) {
        n = n / 10
        digits++
    }
    for (let i = 0; i < digits / 2; i++) {
        let leftDigit = Math.floor(num / Math.pow(10, i)) % 10
        let rightDigit = Math.floor(num / Math.pow(10, digits - i - 1)) % 10

        if (leftDigit != rightDigit) {
            return false
        }
    }
    return true
}
console.log(isPalindrome2(121))
console.log(isPalindrome2(-121))
console.log(isPalindrome2(10))
