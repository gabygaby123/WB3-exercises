let fullName = "Brenda Kaye";
parseAndDisplayName(fullName);
fullName = "Ian Auston";
parseAndDisplayName(fullName);
fullName = "Siddalee Grace";
parseAndDisplayName(fullName);



function parseAndDisplayName(name){
    let space = fullName.indexOf(" ");
    console.log("Name: " + name);
    console.log("First name: " + (fullName.substring(0,space)));
    console.log("Last name: " + (fullName.substring(space+1,fullName.length)));
}