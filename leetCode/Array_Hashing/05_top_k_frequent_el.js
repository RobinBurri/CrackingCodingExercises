/**
 * Given an integer array nums and an integer k, return the k most frequent elements. You may return the answer in any order.

 

Example 1:

Input: nums = [1,1,1,2,2,3], k = 2
Output: [1,2]

Example 2:

Input: nums = [1], k = 1
Output: [1]

 

Constraints:

    1 <= nums.length <= 105
    -104 <= nums[i] <= 104
    k is in the range [1, the number of unique elements in the array].
    It is guaranteed that the answer is unique.

 

Follow up: Your algorithm's time complexity must be better than O(n log n), where n is the array's size.

 */

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
// var topKFrequent = function (nums, k) {
//   const mymap = new Map();
//   returnedArr = [];
//   for (let index = 0; index < nums.length; index++) {
//     if (mymap.has(nums[index])) {
//       mymap.set(nums[index], mymap.get(nums[index]) + 1);
//     } else {
//       mymap.set(nums[index], 1);
//     }
//   }
//   // Find the two largest values and their respective keys
//   for (let i = 0; i < k; i++) {
//     let maxValue = -Infinity;
//     let maxKey;
//     for (const [key, value] of mymap.entries()) {
//       if (value > maxValue) {
//         maxValue = value;
//         maxKey = key;
//       }
//     }
//     returnedArr.push(maxKey);
//     mymap.delete(maxKey);
//   }
//   return returnedArr;
// };


var topKFrequent = function(nums, k) {
    let result = []
    let numbers = {}
    for(let i = 0; i < nums.length; i++) {
        if(numbers[nums[i]]) {
            numbers[nums[i]]++
        } else {
            numbers[nums[i]] = 1
        }
    }
    console.log(Object.entries(numbers))
    let array = Object.entries(numbers).sort((a,b) => {
        return a[1] - b[1]
    })
    while(result.length != k) {
        let curr = array.pop()
        result.push(curr[0])
    }
    return result
};

console.log(topKFrequent([1, 1, 1, 2, 2, 3], 2));
