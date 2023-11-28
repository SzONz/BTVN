let fruitBasket = [
    ["Grape", 15], 
    ["Apple", 2], 
    ["poison", 1]
];
let fruit = fruitBasket[0][0];
let ammount = fruitBasket[0][1];
console.log("i have " + ammount + " " + fruit + "s");

for (let i = 0; i < fruitBasket.length; i++) {
    let fruit = fruitBasket[i][0];
    let ammount = fruitBasket[i][1];
    console.log("i have " + ammount + " " + fruit + "s");
}

var myDog = {
    "name": "Ngáo",
    "legs": "4",
    "friends": ["ko cho!"]
}

myDog.name = "Husky";
myDog.color = "Brown"
delete myDog.friends;
console.log(myDog);