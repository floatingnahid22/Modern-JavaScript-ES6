//import * as test from './external.js'; 
//import {a, pi} from './external.js';

//name import 
import {a as varA, pi as varpi} from './external.js';
console.log(varA, varpi);


//default import 
import external, {pi2, myFunc} from './external.js';//function import/export 
console.log(external, pi2);

myFunc();


