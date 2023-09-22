/**
 * 1.2
 * Check Permutation: Given two strings, write a method to decide if one is a permutation of the other.
 */

const checkPermutation = (str1, str2) => {
    if (str1.length !== str2.length) return false
    const str1Ordered = str1.split('').sort().join('')
    const str2Ordered = str2.split('').sort().join('')
    for (let i = 0; i < str1.length - 1; i++) {
        if (str1Ordered.charCodeAt(i) !== str2Ordered.charCodeAt(i))
            return false
    }
    return true
}

console.log(checkPermutation("hello", "lloeh"))
console.log(checkPermutation("robin", "binro"))
console.log(checkPermutation("", ""))
console.log(checkPermutation("rewq", "rqwe"))
console.log(checkPermutation("sapin", "pinse"))
console.log(checkPermutation("sapin", "tante"))