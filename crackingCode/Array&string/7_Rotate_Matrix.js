/**
 *
 * Rotate Matrix: Given an image represented by an NxN matrix, where each pixel in the image is 4 bytes,
 * write a method to rotate the image by 90 degrees. Can you do this in place?
 */

/**
 *
 * @param {*} matrix
 * first = 0, 1, 2, 3 ...
 * last = 3, 2, 1, 0
 * offset = 0, 1, 2, 3
 *
 * ? top left: matrix[first][i] => moving from left to right
 * ? top right: matrix[i][last] => moving from right to left
 * ? bottom left: matrix[last - offset][first] => moving from left to right
 * ? bottom right: matrix[last][last - offset] => moving from right to left
 *
 * ? movement:   []->         <-[]
 * ? inside
 * ? loop
 * ?            []->         <-[]
 *
 * ? movement   []          []
 * ? outside     |          |
 * ? loop        |          |
 * ?            []          []
 */

function rotateMatrix(matrix) {
    const n = matrix.length
    for (let first = 0; first < Math.floor(n / 2); first++) {
        const last = n - 1 - first
        for (let i = first, offset = 0; i < last; i++, offset++) {
            // save top left el
            let topRight = matrix[first][i]
            // move bottom left to top left
            matrix[first][i] = matrix[last - offset][first]
            // move bottom right to bottom left
            matrix[last - offset][first] = matrix[last][last - offset]
            // move top right to bottom right
            matrix[last][last- offset] = matrix[i][last]
            // move saved el to top right
            matrix[i][last] = topRight
        }
    }
    return matrix
}


// Example usage:
const matrix = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12],
    [13, 14, 15, 16],
]

rotateMatrix(matrix)

console.log(matrix)
