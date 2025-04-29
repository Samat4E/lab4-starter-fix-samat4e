/**
 * 
 * @param {*} num1 - first number to add
 * @param {*} num2 - second number to add
 * @param {*} add - boolean value to decide if addition should happen
 * @returns The sum of the two numbers if `add` is true and both inputs are numbers, false otherwise
 */
function sumValues(num1, num2, add) {
    if (add) {
        if (typeof num1 !== 'number' || typeof num2 !== 'number') {
            return false;
        }
        const result = num1 + num2;
        return result;
    } else {
        return false;
    }
}

/**
 * 
 * @param {*} prices - an array of original prices
 * @param {*} discount - a number between 0 and 1 representing the discount rate
 * @returns An array of discounted prices, or false for invalid inputs or empty array
 */
function discountPrices(prices, discount) {
    if (!Array.isArray(prices) || typeof discount !== 'number') {
        return false;
    }

    if (prices.length === 0) {
        return false;
    }

    const discounted = [];
    const length = prices.length;

    for (let i = 0; i < length; i++) {
        const discountedPrice = prices[i] * (1 - discount);
        discounted.push(discountedPrice);
    }

    return discounted;
}

module.exports = { sumValues, discountPrices };
