
// data types

// primitive types
// String  "hello world"
// number   212345
// Boolean  true , false
// null
// undefined
// BigInt









const userName = null;
 
console.log(userName);

let userName2;

console.log(userName2);

let BigInt = 1235979345821544645852669746551268823n;

console.log(BigInt)


//non primitive

let a = 123;

let b = "Hello";

let c = false;

let array = ["string",12345,true,a,b,c];
// index        0       1     2  3 4 5 
console.log(array)

console.log(array[3])

console.log(array.lenght)

console.log(typeof array);


// object carry key value pairs
let object = {
    userName: "batman",
    age: "33",
    city: "gotham city",
  };

  console.log(object)
  console.log(object.userName)

  //functions

console.log("1");
console.log("2");
console.log("3");
console.log("4");


function print1(){
console.log("1")
}
function print2(){
    console.log("2")
  }
  function print3(){
    console.log("3")
  }
  function print4(){
    console.log("4")
  }


  print3()
print2()
print4()
print1()