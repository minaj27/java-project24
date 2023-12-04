//big number find

const nums=[3,15,7,1,11];


const bigNum = nums.reduce((acc,curr)=> acc > curr ? acc : curr);

console.log(bigNum);


//small number find
const smallnum = nums.reduce((acc,curr)=> acc < curr ? acc : curr);
console.log(smallnum);

 