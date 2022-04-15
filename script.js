//object destructuring 
const user1 = {
    id:22,
    name:'Nahid',
    age:25,
    education: {
        degree: "BSc", //nested object
    },
};

//separate from object because we can use it others place 

// const { name: title } = user;
// console.log(title);

const { 
    education: { degree } = {}} = user1   
console.log(degree);



// const user2 = {
//     id:22,
//     name:'Nahid',
//     age:25,
//     // education: {
//     //     degree2: "BSc", //nested object
//     // },
// };

// //separate from object because we can use it others place 

// // const { name: title } = user;
// // console.log(title);

// const { 
//     education: { degree2 } = {}} = user2   //jodi object e education tai na thake then default value hisebe blank object dibo eivabe. 
// console.log(degree);


//array destructuring

var numbers = [1,2,3,4,6];
var [, a , , , b] = numbers;
console.log(a,b);

var numbers2 = [1, 2, [3, 100, 200],4 ,6];
var [, , [,a ,b]] = numbers2;
console.log(a,b);


//value swap
var a = 1;
var b = 2;

//old way
// var temp = a;
// a = b;
// b = temp;

// console.log(a, b);

//destructuring way
[b, a] = [a, b];
console.log(a, b);