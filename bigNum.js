const nums=[3,15,7,1,11];
let bigNum= nums[0];

for(let i=0; i<nums.length;i++){
    bigNum = bigNum > nums[i] ? bigNum : nums[i]
}
console.log(bigNum);
