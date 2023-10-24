function convertFtoC(temp){
    let celsius = ((temp-32)*(5/9));
    console.log(Math.trunc(celsius));
}

currentTemp = 212;
celsiusTemp = convertFtoC(currentTemp); 
console.log();
currentTemp = 90;
celsiusTemp = convertFtoC(currentTemp); 
console.log();
currentTemp = 72;
celsiusTemp = convertFtoC(currentTemp); 
console.log();
currentTemp = 32;
celsiusTemp = convertFtoC(currentTemp); 
console.log();
currentTemp = 0;
celsiusTemp = convertFtoC(currentTemp); 
console.log();
currentTemp = -40;
celsiusTemp = convertFtoC(currentTemp); 
console.log();