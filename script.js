 function log(anything) {
     return console.log(anything);
 }
  //sets
//let myArray = []; //literal syntax- we cann't use it in set.
//let myArray1 = new Array(); //constructal syntax

let myset = new Set();
myset.add(5).add(7).add('Numbers').add(9).delete(7);
//myset.add(5).add(7).add('Numbers').add(9).clear(); clear the set 
//log(myset.size());//find size
//myset.delete('Number');
//log(myset.delete('Number'));
log('Set-Example: ' + myset);



// set from array
let myArray = [1, 3, 5];

let mySet1 = new Set('Bangladesh');

for(let value of mySet1) {
   // log(value);
}

log('Set from array: ' + mySet1);

//array from set

let myArray2 = [1, 3, 5];

let mySet2 = new Set(myArray2);

log('array from set: ' + [...mySet2]);




//weakset- not iterable but take iterable 
const ws = new WeakSet([{a:1}, {b:2}]);
ws.add({c:3});  //have to add object otherwise it will give error
log(ws)