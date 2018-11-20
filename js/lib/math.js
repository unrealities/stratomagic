// Return a positive integer less than or equal to the max value passed.
function randomPositiveInteger(max) {
    let randomDecimal = Math.random() * max;
    return Math.floor(randomDecimal) + 1;
}
