var numbers = [1, 2, 3, 4, 12,14];

var result = numbers.findIndex((currentValue, index, arr) => {
    return currentValue > 20;
});

console.log(result);

