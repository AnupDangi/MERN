//b Write a node js program to print a car object property ,delete teh second property and get length 
// of the object
 

const car={
    brand:"Toyota",
    model:"Land Crusier",
    year:2023,
    color:"black"
};

//print original properties 
console.log(("Original Properties: "));
for(let key in car){
    console.log(`${key}:${car[key]}`);
}

//delete the second property 

const secondproperty=Object.keys(car)[1];
delete car[secondproperty];

//print the new updated properties
console.log("\nNew updated properties are :");
for(let key in car){
    console.log(`${key}:${car[key]}`);
}

//get the length of the properties 
const getlen=Object.keys(car).length;
console.log(`The new length of the car is :${getlen}`);