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

//Unit conversion
let oneFoot = 12; // one foot is equals to 12 inch
let inch = 42;
let inchToFootConversion = inch/oneFoot;
console.log("42 inches is equals to: "+inchToFootConversion+" ft");

//Rectangular Plot of 60 feet x 40 feet in meters
let lengthOfPlot = 60;
let breadthOfPlot = 40;
let oneMeter = 3.28; //one meter is equals to 3.2 feet
let areaOfPlotInMeters = lengthOfPlot * breadthOfPlot / oneMeter;
console.log("Area of rectangular plot is: "+areaOfPlotInMeters+" m");
