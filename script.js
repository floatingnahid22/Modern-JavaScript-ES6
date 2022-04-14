

//object tricks

var myObj = {
    name: 'JavaScript',
    estd: '1995',
    founder: 'Brenden Eich',
    ranking: 1
};

var keys = Object.keys(myObj);
var values = Object.values(myObj);
var entries = Object.entries(myObj);

console.log(keys);
console.log(values);
console.log(entries);


var x = 4;
var y = 5;

var z = x*y;

var myObj2 = {
    name: 'JavaScript',
    estd: '1995',
    founder: 'Brenden Eich',
    ranking: 1,
    x,
    y,
    z
};

var entries = Object.entries(myObj2);

console.log(entries);

//function default parameter
function myFunc(x=10) {
    return x;
}
console.log(myFunc(null));

