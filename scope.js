

if(true){
    let a = 10;
    const b = 20;
    var c = 30;
}
// console.log(a);
// console.log(b);
console.log(c); // Here the value of will be printed which should not be printed in a ideal case as var c been declared inside 
// if scope and the console log is written in global scope . This is the reason that we never use var because it has some issues with 
// scoping here also a variable declared inside a block scope is getting executed outside the block scope i.e global scope


// anything written inside global scope is available to the local scope but the vice versa innot applicable 