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

//Write a program that reads 5 Random 2 Digit values , then find their sum and the average
let values = 0;
for(let numOftimes = 0; numOftimes < 5; numOftimes++){
    let diceRandomValue = Math.floor(Math.random() * 90 + 10);
    console.log(diceRandomValue);
    values += diceRandomValue;
}
console.log("Sum of five dice values: "+values);
console.log("Average of five dice values: "+ values/5);
