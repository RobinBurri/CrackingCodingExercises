/**
 * String Compression: Implement a method to perform basic string compression using the counts
of repeated characters. For example, the string aabcccccaaa would become a2blc5a3. If the
"compressed" string would not become smaller than the original string, your method should return
the original string. You can assume the string has only uppercase and lowercase letters (a - z).
 */

const strCompression = (s) => {
    let compressed = ''
    let count = 1

    for (let i = 0; i < s.length; i++) {
        if (s[i] === s[i + 1]) count++
        else {
            compressed += s[i] + count
            count = 1
        }
    }
    return compressed.length < s.length ? compressed : s
}

console.log(strCompression('aabcccccaaa'))
