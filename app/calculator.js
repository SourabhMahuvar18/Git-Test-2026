/**
 * Simple Calculator Module
 * Provides basic arithmetic operations
 */

function add(a, b) {
    // Bug resolved - correctly returning a + b
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

module.exports = {
    add,
    subtract
};

