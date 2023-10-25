// First Function
function displayMailingLabel(name,address,city,state,zip){
    console.log(" Name: " + name);
    console.log(" Address: " + address);
    console.log(" City: " + city);
    console.log(" State: " + state);
    console.log(" Zip: " + zip);
}

let someName = "Gaby"
let someAddress = "123 st."
let someCity = "Phoenix"
let someState = "AZ"
let someZip = "85009"
displayMailingLabel(someName,someAddress,someCity,someState,someZip)
console.log()
someName = "Gabe"
someAddress = "321 st."
someCity = "Tempe"
someState = "AZ"
someZip = "85281"
displayMailingLabel(someName,someAddress,someCity,someState,someZip)
console.log()

//Second Function
function addNumbers (num1, num2){
    sum = num1 + num2
    console.log(num1 + "+" + num2 + "=" + sum);
}
let someNum1 = 5;
let someNum2 = 10;
addNumbers(someNum1,someNum2);

someNum1 = 15;
someNum2 = 20;
addNumbers(someNum1,someNum2);
console.log()

//Third Function
function displayReceipt(totalDue, amountPaid){
    console.log("Total Due: $" + totalDue)
    console.log("Amount Paid: $" + amountPaid)
    console.log("Change Due: $" + (amountPaid - totalDue))
}

let total = 20;
let paidAmount = 25;
displayReceipt(total,paidAmount)
console.log()
total = 20;
paidAmount = 20;
displayReceipt(total,paidAmount)
console.log()
total = 25;
paidAmount = 20;
displayReceipt(total,paidAmount)

