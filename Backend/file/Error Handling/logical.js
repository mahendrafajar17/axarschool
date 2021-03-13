function power(base, exponent) {
    var result = 1;
    for (var count = 0; count < exponent; count++)
        result *= base;
    return result;
}

console.log(power(5, 0.2));
console.log(Math.pow(5, 0.2));