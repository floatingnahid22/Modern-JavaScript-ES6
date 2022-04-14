//for loop

// let i = 1;
// for (; i <= 6; i++) {
//     console.log(i);
// }
let i = 1;
for (; ; i++) {
    if(i <=5) {
        console.log("for-loop: " + i);
    }else {
        break;
    }
}

//for in 
const myObj = {
    name: 'JavaScript',
    estd: '1995',
    founder: 'Brenden Eich'
};

for(property in myObj) {
    console.log("for-in: " + property)
}


//for-of
const myArray = [1, 2, 3, 4, 5];

for(element of myArray) {
    console.log("for-of: " + element)
}