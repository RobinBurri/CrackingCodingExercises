/**
 * One Away: There are three types of edits that can be performed on strings: insert a character,
 * remove a character, or replace a character. Given two strings, write a function to check if they are
 * one edit (or zero edits) away.
 * EXAMPLE
 * pale, ple-> true
 * pales, pale -> true
 * pale, bale -> true
 * pale, bake -> false
 */

const checkOneAway = (original, modified) => {
    const originalArr = original.split('')
    const modifiedArr = modified.split('')
    if (originalArr.length > modifiedArr.length) {
        for (let i = 0; i < modifiedArr.length; i++) {
            if (!originalArr.includes(modifiedArr[i])) {
                return false
            }
        }
        return true
    }
    if (originalArr.length < modifiedArr.length) {
        for (let i = 0; i < originalArr.length; i++) {
            if (!modifiedArr.includes(originalArr[i])) {
                return false
            }
        }
        return true
    }
    let changed = 0
    for (let i = 0; i < originalArr.length; i++) {
        if (originalArr[i] !== modifiedArr[i]) {
            changed++
        }
    }

    if (changed <= 1) return true
    return false
}

console.log(checkOneAway("pale", "ple"))
console.log(checkOneAway("pales", "pale"))
console.log(checkOneAway("pale", "bale"))
console.log(checkOneAway("pale", "bake"))
