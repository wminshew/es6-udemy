import { students } from './students';
import { add, multiply } from './calculator';
// import default doesn't need { }'s
import Entity from './entity';

let a = 'hello';
let b = 'goodbye';
console.log(a);

// variable scoping with let
{
  let a = 'goodbye';
  console.log('inside curly brackets', a);
}

// template literals
let c = `${a} world`;
console.log(c);

// spread operator
let d = [7,8,9];
let e = [6, ...d, 10];
console.log(e);
let f = [...e];
console.log(f);

function print_array(...z) {
  console.log(z);
}
print_array(1, 2, 3);

// de-structured assignment
let g = [100, 200];
let [h, i] = g;
console.log(h, i);

let a1 = [100, 200, 300, 400, 500];
let [head, ...tail] = a1;
console.log(tail);

// de-structuring objects
let wizard = { magical: true, power: 10 };
let { magical, power } = wizard;
console.log(magical, power);

// arrow functions
function blastoff() {
  console.log("3...2...1... blastoff!");
}
blastoff();

setTimeout(
  () => { console.log("3...2...1... anonymous blastoff!") },
  1000
);

const c_blastoff = () => {
  console.log("3...2...1... const blastoff!")
}

c_blastoff();

// arrow functions do not bind their own this

// map function
let points = [10, 20, 30];
console.log(points.map(x => x+1));

// export / import
console.log(students);
console.log(add(3,4));
console.log(multiply(3,4));

// inheritance
class Hobbit extends Entity {
  constructor(name, height) {
    super(name, height);
  }
}

let frodo = new Hobbit("Frodo Baggins", 4.5);
frodo.greet();
