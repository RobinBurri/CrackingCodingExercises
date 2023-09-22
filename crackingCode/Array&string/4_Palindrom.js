/**
 * Palindrome Permutation:
 * Given a string, write a function to check if it is a permutation of a palin­
 * drome. A palindrome is a word or phrase that is the same forwards and backwards. A permutation
 * is a rearrangement of letters. The palindrome does not need to be limited to just dictionary words.
 * EXAMPLE
 * Input:Tact Coa
 * Output:True (permutations: "taco cat", "atco eta", etc.)
 */

const checkPermutation = (str) => {
    const strArr = str.toLowerCase().split('')
    strArr.sort()
    while (strArr[0] === ' ') strArr.shift()
    let oddLetters = 0
    let i = 0
    while (i < strArr.length) {
        if (strArr[i] !== strArr[i + 1]) {
            if (oddLetters !== 0) return false
            i++
            oddLetters++
        } else {
            i += 2
        }
    }
    return true
}

let input = 'Tact Coass'

console.log(checkPermutation(input))
