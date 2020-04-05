let hasValue: boolean = false;
let count: number = 10;
let float: number = 3.14;
let negative: number = -1;
let single: string = "hello";

let he: string;

const person: {
  name: string;
  age: number;
} = {
  name: "Jack",
  age: 21
};
console.log(person.name);

const fruits = ["Apple", "Banana", "Grape", 1];

// tuple 型 配列の中にはいる型を決める
const book: [string, number, boolean] = ["business", 1500, false];

console.log(person);

// enum 型　オブジェクトに入るものを決められる　列挙型
enum CoffeeSize {
  SHORT = "SHORT",
  TALL = "TALL",
  GRANDE = "GRANDE",
  VENTI = "VENTI"
}

const coffee = {
  hot: true,
  size: CoffeeSize.TALL
};
coffee.size = CoffeeSize.SHORT;

let anything: any = true;

// union型
let unionType: number | string = 19;
let unionTypes: number | string;

// literal型 入るものを決める（const）
const apple = "apple";
let clothSize: "small" | "medium" | "large" = "large";
const cloth = {
  size: clothSize
};

// type エイリアス
type clothSize = "small" | "medium" | "large";
