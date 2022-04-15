function log(anything) {
    return console.log(anything);
}
//find unique array
let myArr = [1, 2, 3, 4, 5, 5, 6, 5, 4];

log([...new Set(myArr)]);


//union of sets

let a = new Set([1, 2, 3]);
let b = new Set([4, 3, 1]);

let union = new Set([...a, ...b]);
log(union);

//interSection
let interSection = new Set([...a].filter(x => b.has(x)));
log(interSection);

//difference
let difference1 = new Set([...a].filter(x => !b.has(x)));//a-b
let difference2 = new Set([...b].filter(x => !a.has(x)));//b-a
log(difference1);
log(difference2);

