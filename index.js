var hasValue = false;
var count = 10;
var float = 3.14;
var negative = -1;
var single = "hello";
var he;
var person = {
    name: "Jack",
    age: 21
};
console.log(person.name);
var fruits = ["Apple", "Banana", "Grape", 1];
// tuple 型 配列の中にはいる型を決める
var book = ["business", 1500, false];
console.log(person);
// enum 型　オブジェクトに入るものを決められる　列挙型
var CoffeeSize;
(function (CoffeeSize) {
    CoffeeSize["SHORT"] = "SHORT";
    CoffeeSize["TALL"] = "TALL";
    CoffeeSize["GRANDE"] = "GRANDE";
    CoffeeSize["VENTI"] = "VENTI";
})(CoffeeSize || (CoffeeSize = {}));
var coffee = {
    hot: true,
    size: CoffeeSize.TALL
};
coffee.size = CoffeeSize.SHORT;
