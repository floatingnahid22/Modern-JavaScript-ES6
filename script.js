var numbers = [1, 2, 3, 4, 12,14];

var result = numbers.filter((currentValue, index, arr) => {
    return currentValue > 4;
});

console.log(result);

