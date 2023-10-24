function convertCtoF(temp){
    let fahrenheit = ((temp*(9/5)+32));
    console.log(Math.trunc(fahrenheit));
}

currentTemp = 100;
celsiusTemp = convertCtoF(currentTemp); 
console.log();
currentTemp = 45;
celsiusTemp = convertCtoF(currentTemp); 
console.log();
currentTemp = 72;
celsiusTemp = convertCtoF(currentTemp); 
console.log();currentTemp = 32;
celsiusTemp = convertCtoF(currentTemp); 
console.log();
currentTemp = 0;
celsiusTemp = convertCtoF(currentTemp); 
console.log();
currentTemp = -40;
celsiusTemp = convertCtoF(currentTemp); 
console.log();