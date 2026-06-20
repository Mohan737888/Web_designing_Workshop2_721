// let numbers = [1,2,3,4,5,6,7]; //Array
// console.log(numbers[0]);
// console.log(numbers[1]);
// console.log(numbers[2]);
// console.log(numbers[3]);
// console.log(numbers[4]);

// let mixedArray = [1, "Hello",true,{name:"Alice"},[1,2,3]];
// console.log(mixedArray[0]);
// console.log(mixedArray[1]);
// console.log(mixedArray[2]);
// console.log(mixedArray[3]);

// function greet(){
//     console.log("hello , CSE27!");
// }
// greet();
// let Multiple = function(a,b){
//     return a*b;
// };
// console.log(Multiple(10,2));

// let sayhi = () => console.log("hi");
// sayhi();
// let newarray =[1,2,3,4,5];
// let squaredArray = newarray.map((num)=> num*5);
// console.log(squaredArray);
// filter 
let evennumber = [1,2,3,4,5];
let filteredenennumber = evennumber.filter(num => num%2 == 0);
console.log(filteredenennumber);
// let evennumber = [1, 2, 3, 4, 5];

// let filteredenennumber = evennumber.filter(num => num % 2 === 0);

// console.log(filteredenennumber);
// object inside array
let people = [
    {name:"Alice",age : 25},
    {name:"Bob",age : 30},
    {name:"charlie",age :35},


];
console.log(people[0]);
console.log(people[1].name);
console.log(people[2].age);
let company = {
    name:"Tech Corp",
    employess:{"Alice ","Bob " ,"Charlie"};
    
}
