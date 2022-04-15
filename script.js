//template literals
var a = 5;
var b = 6;

console.log(`I am ${a+b} and I am ${a-b}`);

//tagged template literals
function modifier(strings, ...values) {
    // console.log(strings);
    // console.log(values);
    const m = strings.reduce((prev, current) => {
        return prev + current +(values.length ? "Mr. " + values.shift(): "")
    }, "");
    return m;
}

var player1 = 'sakib';
var player2 = 'tamim';

console.log(modifier`We have ${player1} and ${player2} in Bangladesh Cricket Team.`);