var array=[0,23,0,0,0,4,6,0,8,10,0,0,0,12]


var zeros=array.filter(v => v == 0);
var nonzeros=array.filter(v => v != 0);

console.log(nonzeros);
console.log(zeros);

const result = nonzeros. concat(zeros);

console.log(result);