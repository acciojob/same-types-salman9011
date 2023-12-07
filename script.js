function isSameType(value1, value2) {
    // Check if both values are NaN
    if (isNaN(value1) && isNaN(value2)) {
        return true;
    }

    // Check if both values are of the same type (number, string, or NaN)
    if (typeof value1 === typeof value2) {
        return true;
    }

    // Check if both values are not NaN
    if (!isNaN(value1) && !isNaN(value2)) {
        return false;
    }

    return false;
}

// Get user input using prompt
let value1 = prompt("Enter Start of the Range.");
let value2 = prompt("Enter End Of the Range.");

// Display the result
alert(isSameType(value1, value2));
