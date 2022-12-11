/**
 * * 11. Container With Most Water
 * You are given an integer array height of length n.
 * There are n vertical lines drawn such that the two endpoints of the ith line are (i, 0) and (i, height[i]).

    Find two lines that together with the x-axis form a container, such that the container contains the most water.

    Return the maximum amount of water a container can store.

    Notice that you may not slant the container.
 */

/**
 * * Examples:
 * Input: height = [1,8,6,2,5,4,8,3,7]
    Output: 49
    Explanation: The above vertical lines are represented by array [1,8,6,2,5,4,8,3,7]. 
    In this case, the max area of water (blue section) the container can contain is 49.


    Example 2:
    Input: height = [1,1]
    Output: 1
 */

/**
 * @param {number[]} height
 * @return {number}
 */

const findMaxFastLoop = (arr) => {
    let max = arr[0]
    for (const val of arr) {
        if (val > max) {
            max = val
        }
    }
    return max
}
var maxArea = function (height) {
    let maxWater = 0
    let maxheight = findMaxFastLoop(height)
    if (maxheight > height.lenght) {
        let maxheightIndex = height.indexOf(maxheight)
        while (maxheightIndex > -1) {
            for (let i = 0; i < height.length; i++) {
                let indexesDiff = Math.abs(i - maxheightIndex)

                if (maxWater < indexesDiff * height[i]) {
                    maxWater = indexesDiff * height[i]
                }
            }
            maxheightIndex = height.indexOf(maxheight, maxheightIndex + 1)
        }
    } else {
        let i = 0
        let j = height.length - 1
        while (i <= j) {
            let water = Math.min(height[i], height[j]) * (j - i)
            if (water > maxWater) {
                maxWater = water
            }
            if (height[i] < height[j]) {
                i++
            } else {
                j--
            }
        }
    }
    return maxWater
}

let test2 = [1, 2, 1]

let result = maxArea(test2)
console.log(result)
