 //array spreading
 
 var numbers = [1,2,3,4,5];

 var a = [...numbers];//exact copy of numbers

 var newNumbers = [...numbers,6];
 numbers.push(7)

 console.log(newNumbers);
 console.log(numbers);

 //object spreading 

 var myObj1 = {
     x:1,
     y:2
 }
 var myObj2 = {
     a:1,
     b:2
 }

 console.log({
    ...myObj1,
    ...myObj2
 });