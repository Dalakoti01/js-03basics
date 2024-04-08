/*
 Whenever we need to use some same block of code again and again then in that scenario , despite running all the lines , again and 
 again , we can declare it inside a function andwhenever we need to execute those lines of code , we can directly call or execute 
 our function
 */

// function declaration
function sayMyName(){
    console.log("H");
    console.log("I");
    console.log("E");
    console.log("S");
    console.log("E");
    console.log("N");
    console.log("B");
    console.log("E");
    console.log("R");
    console.log("G");





}
sayMyName; // It is called as the reference of a function when we just write the function without paranthesis
sayMyName(); // Here the execution of function occurs. 

function addTwoNumbers(a,b){ // Values passed here inside paranthesis are called as parametres
    console.log(a+b);
}

addTwoNumbers();
addTwoNumbers(3,4); // Values passed here inside paranthesis are called as arguement
addTwoNumbers(3,"a")
addTwoNumbers(3,null)

function addTwoNumbers2(a,b){
    console.log(a+b);
    return a+b;
    console.log("karan"); // this will never print asafter returning no code gets executed
}

const value = addTwoNumbers();
console.log(value);  //  Here the output will be undefined because the function is not returning anything
const value1 = addTwoNumbers2(3,4);
console.log("result: " ,value1); // Here the output will come as the function is returning a + b

function loginUserName(username = "sam" ){ //if nothing is passed inside arguments then sam will be replaced with username
    if(!username){ // if nothing is present in username at execution time then the below block will get executed
        console.log("please enter valid user name"); 
        return
    }
    return `${username} just logged in` // String interpolation
}
console.log(loginUserName("karan" ));
// console.log(loginUserName()); undefined will be the output if no if condition is there and no default parametre is defined

console.log(loginUserName());

// More about Functions

function addToMyCart(...num1){ //  These three dots are calledas rest operator and can store any number of avlues into an array 
    return num1;
}
console.log(addToMyCart(234,432,1211,123,43));

// The above functions which is using rest operator is very much useful when we are using an e-commerce website as at the time of 
// functions creation we are unaware about how many elements are coming in the cart .  So by using rest operator we can store 
// any number of items into the cart using an array and afterwards using for loop we can easily find out its sum

function addToMyCart1(val1, val2, ...num1){ //  These three dots are calledas rest operator and can store any number of avlues into an array 
    return num1;
}
console.log(addToMyCart1(234,432,1211,123,43)); //Here the first two values will be given to val1 and val 2 respectively and all the
// other values will be stored into an array using an rest operator

// How to pass an object inside an function

const user = {
    userName : "Karan",
    salary : 10000000

}

function handleObject (anyObject){
    console.log(`Username is ${user.userName} and his salary is ${user.salary}` );
}

console.log(handleObject(user));

// How to pass an array using an function

const myNewArray = [200,400,100,160]
function returnMySecondValue(getArray){
    return getArray[1]
}

console.log(returnMySecondValue(myNewArray));
// console.log(returnMySecondValue([200,400,100,160])); // both will give the same output
                                                
