 //for each method ..find big number
const nums=[3,15,7,1,11];
let bigNum= nums[0];

nums.forEach((item) => {
     bigNum = bigNum > item ?  bigNum : item;
})
console.log(bigNum);