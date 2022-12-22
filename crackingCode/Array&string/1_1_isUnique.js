/**
 * Is Unique: Implement an algorithm to determine if a string has all unique characters.
 * What if you cannot use additional data structures?
 */

// The easyest way would be to use a set and compare the length of the set vs the string.
// So I would sort them and check if evey char is bigger than the last one

const isUnique = (params) => {
    const paramsOrdered = params.split('').sort().join('')
    for (let i = 1; i < paramsOrdered.length - 1; i++) {
        if (paramsOrdered.charCodeAt(i) >= paramsOrdered.charCodeAt(i + 1)) {
            return false
        }
    }
    return true
}

console.log(isUnique('hello'))
console.log(isUnique('unique'))
console.log(isUnique('true'))
console.log(isUnique('asdfjkl;'))
