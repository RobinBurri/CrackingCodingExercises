/**
 * 169. Majority Element
 * Given an array nums of size n, return the majority element.
 *
 * The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.
 *
 * Example 1:
 *
 * Input: nums = [3,2,3]
 * Output: 3
 * Example 2:
 *
 * Input: nums = [2,2,1,1,1,2,2]
 * Output: 2
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
// var majorityElement = function (nums) {
//     let m = new Map()
//     for (const val of nums) {
//         if (!m.has(val)) {
//             m.set(val, 1)
//         } else {
//             let oldval = m.get(val)
//             m.set(val, oldval + 1)
//         }
//     }
//     let maj = 0
//     let majKey = 0
//     m.forEach((val, key) => {
//         if (val > maj) {
//             maj = val
//             majKey = key
//         }
//     })
//     return majKey
// }
// var majorityElement = function (nums) {
//     nums.sort()
//     return nums[Math.floor(nums.length / 2)]
// }

var majorityElement = function (nums) {
    let count = 0,
        res = 0

    for (let i in nums) {
        if (count === 0) res = nums[i]

        nums[i] === res ? count++ : count--
    }
    return res
}

let r = majorityElement([2, 2, 1, 1, 1, 2, 2])
console.log(r)
