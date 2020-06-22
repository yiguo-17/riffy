//require back-end
const time = require('./timelygreeting.js');
const taken = require('./tometric.js');
const calculator = require('./caffeinecalculator.js')
const advice = require('./advise.js')

let message = '';//Starting string
let diet = 0; //food or drink
let amount = 0;//caffeine
if(getInput(0) === undefined){message = time();}
else{diet = taken(getInput(0),getInput(1),getInput(2));
amount = calculator(getInput(2),diet);
message = advice(amount); } 
console.log(message);

//getInput
function getInput(i) {
return process.argv[i + 2];
}