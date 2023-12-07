function isSameType(value1, value2) {
    // Check if both values are NaN
    if (Number.isNaN(Number(value1)) && Number.isNaN(Number(value2))) {
        return true;
    }

    // Check if both values are of the same type (number, string, or NaN)
    if (typeof value1 === typeof value2) {
        return true;
    }

    // Check if both values are not NaN
    if (!Number.isNaN(Number(value1)) && !Number.isNaN(Number(value2))) {
        return false;
    }
}

// Example usage
const value1 = "hello";
const value2 = 123;

console.log(isSameType(value1, value2)); // This should return false
