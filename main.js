//require back-end
const time = require('/.timelygreeting.js');
const taken = require('/.tometrc.js');
const calculator = require('/.caffeinecalculator.js')
const advice = require('/.advise.js')

let message = '';//Starting string
let amount = 0;//Starting amount 0 mg



//getInput
function getInput(i) {
return process.argv[i + 2];
}