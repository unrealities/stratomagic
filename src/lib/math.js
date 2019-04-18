// Return a positive integer less than or equal to the max value passed.
export function RandomPositiveInteger(max) {
  let randomDecimal = Math.random() * max;
  return Math.floor(randomDecimal) + 1;
}

// Generate cartesian product of given iterables
// Blatantly stolen from Stack Overflow: 
// https://stackoverflow.com/a/42137634
export function Cartesian(array) {
    function c(part, index) {
        var k = Object.keys(array[index])[0];
        array[index][k].forEach(function (a) {
            var p = Object.assign({}, part, { [k]: a });
            if (index + 1 === array.length) {
                r.push(p);
                return;
            }
            c(p, index + 1);
        });
    }

    var r = [];
    c({}, 0);
    return r;
}
