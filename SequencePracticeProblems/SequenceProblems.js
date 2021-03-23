//generating single random value
let singleRandomValue = Math.floor(Math.random() * 10);
console.log(singleRandomValue);

//generating dice values between 1-6
let diceRandomValue = 1 + (Math.floor(Math.random() * 10) % 6);
console.log(diceRandomValue);

//adding two dice values
let value = 0;
for(let times = 0; times < 2; times++){
    let diceRandomValue = 1 + (Math.floor(Math.random() * 10) % 6);
    value += diceRandomValue;
}
console.log("Sum of two dice values: "+value);