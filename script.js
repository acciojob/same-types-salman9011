function isSameType(value1, value2) {
    // Convert string representations of numbers to actual numbers
    value1 = Number(value1);
    value2 = Number(value2);

    // Check if both values are NaN
    if (Number.isNaN(value1) && Number.isNaN(value2)) {
        return true;
    }

    // Check if both values are of the same type (number, string, or NaN)
    if (typeof value1 === typeof value2) {
        return true;
    }

    // Check if both values are not NaN
    if (!Number.isNaN(value1) && !Number.isNaN(value2)) {
        return false;
    }
}

// Get user input using prompt
let value1 = prompt("Enter Start of the Range.");
let value2 = prompt("Enter End Of the Range.");

// Display the result
alert(isSameType(value1, value2));
