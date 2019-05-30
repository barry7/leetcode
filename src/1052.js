

/**
 * @param {number[]} customers
 * @param {number[]} grumpy
 * @param {number} X
 * @return {number}
 */
var maxSatisfied = function (customers, grumpy, X) {
    let sum = 0;
    let length = customers.length;
    let max = 0;
    for (let i = 0; i < length; i++) {
        if (grumpy[i] == 0) {
            sum += customers[i]
        } else if (grumpy[i] == 1) {
            let tmp = 0;
            for (let j = 0; j < X && i + j < length; j++) {
                if (grumpy[i + j] == 1) {
                    tmp += customers[i + j]
                }
            }
            if (tmp > max) {
                max = tmp
            }
        }
    }
    return sum + max
};
console.log(maxSatisfied(
    [1],
    [0],
    1))
