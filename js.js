
// for (let num=0;num<=25;num++) {
//   if(num%2==0){
//     console.log(num);
//   }
// }

// for (let num1=1;num1<=10;num1++) {
//     console.log(Math.pow(num1, 2));
      
//   }

//   for (let num2=0;num2<=20;num2++) {
//     if(num2%2!=0){
//       console.log(num2);
//     }
//   }

//   let arr=[0,1];
 
//   for (let num3=0;num3<=10;num3++) {
//     arr.push(arr[num3]+arr[num3+1]);
//         console.log(arr[num3]);
//   }

 
//     for (let num5=1;num5<=3;num5++) {
//         for (let num4=0;num4<=10;num4++) {
//         console.log(num5+ "X"+num4+"="+num5*num4);
//     }
//   }

let numbers = [1, 5, 3, 8, 2,4,6,7,9,10];

numbers.sort((a, b) => a - b);
console.log(numbers);

let map1 = numbers.map((x) => Math.pow(x, 2));
console.log(map1);

const found = map1.find((element) => element > 25);

console.log(found);

const isAboveThreshold = (currentValue) => currentValue > 5;


console.log(map1.every(isAboveThreshold));

console.log(map1.includes(3));

const result = numbers.filter((number) => number%2==0);

console.log(result);
let index=0;index2=0;
if(map1.length%2==0){
    index=map1.length/2;
    index2=index-1;
}else{
    index=(map1.length-1)/2;
    index2=index+1;
}

map1.splice(index2,2);

console.log("this is"+map1);

const initialValue = 1;
const multy = map1.reduce(
  (accumulator, currentValue) => accumulator*currentValue,
  initialValue,
);
console.log(multy);

const found2 = map1.find((element) => element > 5);

console.log(found2);

console.log(map1.pop());

map1.push(100);
console.log(map1);

let names = ['Alice', 'Bob', 'Charlie', 'David', 'Eve'];
const elemnets = names.filter((name) => name.includes('a')||name.includes('A'));
console.log(elemnets.join('-'));

let fruits = ['apple', 'banana', 'cherry', 'date','elephant', 'bird', 'lion'];


const found3 = fruits.find((element) => element.startsWith("b"));

console.log(found3);

console.log(fruits.slice(1, 4));

let words1 = ['hello', 'world', 'javascript', 'array', 'function'];

const lengths = words1.map((x) => x.length);
console.log(lengths);

const found4 = words1.find((element) => element=="array");
console.log(found4);
if(found4!==""){
 console.log("found");
}else{
    console.log("not found");
}
