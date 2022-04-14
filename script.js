// var numbers = [1, 2, 3, 4, 12,14];

// var result = numbers.find(function(currentValue, currentIndex, arr) {
//     return currentValue > 4;
// });

// console.log(numbers);
// console.log(result);

class Student {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    test() {
        console.log("hello");
    }
    exampleFunction() {
        let array = [1,2,3];
        array.find(() => {
            this.test();
        });
    }
}

let student = new Student("nahid", 25);

student.exampleFunction();