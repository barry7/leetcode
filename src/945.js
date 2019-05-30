/**
 * @param {number[]} A
 * @return {number}
 */
var minIncrementForUnique = function (A) {
    let count = 0;
    A.sort(function (a, b) {
            return parseInt(a) - parseInt(b)
        }
    );
    for (let i = 1; i < A.length; i++) {
        if (A[i] <= A[i - 1]) {
            count += A[i - 1] - A[i] + 1;
            A[i] = A[i - 1] + 1;
        }
    }
    return count
};

let test = [3, 3, 0, 2, 0, 9, 2, 11, 10, 14, 5, 13, 6, 5, 1]
console.log(minIncrementForUnique(test))
