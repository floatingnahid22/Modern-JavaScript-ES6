//array concat()
var numbers1 = [1, 2, 3, 4, 5];
var numbers2 = [6, 7, 8, 9, 10];
var numbers3 = [11, 12, 13, 14, 15];

var result = numbers2.concat(numbers3)

//array push()-push as a element of a array, you will see in result
numbers1.push([6,7]) 

//array map()-work like for loop
var result2 = numbers2.map((num) => {
    return 2* num;
});


//array resuce()- reduced a array into a single value
var sum = numbers3.reduce((prevValue, currentValue, currentIndex, arr) => {
    return prevValue+currentValue;
});


console.log("concat:" + result)
console.log("push:" + numbers1)
console.log("map:" + result2)
console.log("reduce:" + sum)

