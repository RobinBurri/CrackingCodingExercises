/**
 * URLify: Write a method to replace all spaces in a string with '%20'. You may assume that the string
 * has sufficient space at the end to hold the additional characters,and that you are given the "true"
 * length of the string. (Note: If implementing in Java, please use a character array so that you can
 * perform this operation in place.
 * EXAMPLE
 * ", 13
 * Input:"Mr John Smith
 * Output:"Mr%20John%20Smith"
 */

let mystr = 'MR John Smith'
const urlify = (str) => {
    const strArr = str.split('')
    const newStr = []
    let j = 0
    for (let i = 0; i < strArr.length; i++) {
        if (strArr[i] === ' ') {
            newStr[j] = '%20'
            j += 3
        } else {
            newStr[j] = strArr[i]
            j++
        }
    }
    return newStr.join('')
}

console.log(urlify(mystr))
