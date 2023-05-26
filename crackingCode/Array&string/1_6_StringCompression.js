/**
 * String Compression: Implement a method to perform basic string compression using the counts
of repeated characters. For example, the string aabcccccaaa would become a2blc5a3. If the
"compressed" string would not become smaller than the original string, your method should return
the original string. You can assume the string has only uppercase and lowercase letters (a - z).
 */

const strCompression = (str) => {
    const strArr = str.split("")
    let newArr = []
    let index = 0
    while( index < strArr.length) {
        let j = 1
        while (strArr[index] === strArr[index + j]) {
            j++
        }
    }
}