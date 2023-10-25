//functions
function getSupplier(code){
let supplier = code.substring(0,colon)
console.log("Supplier: " + supplier);
}
function getProductNumber(code){
    let productNumber = code.substring(colon+1,dash);
    console.log("Product: " + productNumber);
}
function getSize(code) {
    let getSize = code.substring(dash+1);
    console.log("Size: " + getSize);
}

//variables
let colon = fullcode.indexOf(":")
let dash = fullcode.indexOf("-");
let fullcode = "ACME:123-L "

//function call
getSupplier(fullcode)
getProductNumber(fullcode)
getSize(fullcode)
