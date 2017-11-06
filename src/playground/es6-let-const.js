var nameVar = "Duy Do";
var nameVar = "Duy"
console.log("nameVar", nameVar);


let nameLet = "Cindy";
nameLet = "Julie";
console.log("nameLet", nameLet);

const nameConst = "Sora";
console.log("nameConst", nameConst);


//block scoping
var fullName = "Sora Aoi";

if(fullName) {
    let firstName = fullName.split(" ")[0];
    console.log(firstName);
}

console.log(firstName);