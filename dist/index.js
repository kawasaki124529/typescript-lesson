"use strict";
let hasValue = false;
let count = 10;
let float = 3.14;
let negative = -1;
let single = "hello";
let he;
const person = {
    name: "Jack",
    age: 21
};
console.log(person.name);
const fruits = ["Apple", "Banana", "Grape", 1];
// tuple 型 配列の中にはいる型を決める
const book = ["business", 1500, false];
console.log(person);
// enum 型　オブジェクトに入るものを決められる　列挙型
var CoffeeSize;
(function (CoffeeSize) {
    CoffeeSize["SHORT"] = "SHORT";
    CoffeeSize["TALL"] = "TALL";
    CoffeeSize["GRANDE"] = "GRANDE";
    CoffeeSize["VENTI"] = "VENTI";
})(CoffeeSize || (CoffeeSize = {}));
const coffee = {
    hot: true,
    size: CoffeeSize.TALL
};
coffee.size = CoffeeSize.SHORT;
let anything = true;
// union型
let unionType = 19;
let unionTypes;
// literal型 入るものを決める（const）
const apple = "apple";
let clothSize = "large";
const cloth = {
    size: clothSize
};
