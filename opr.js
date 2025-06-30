//Use Case : when we have to import one function only.

//WAY 0
const add=require('./math');
console.log(add(2,3));

//when more than one has to be imported.

//WAY1
const math=require('./math');
console.log(math.add(2,5));
console.log(math.sub(10,2));

//WAY2
const {add,sub,div,mul}=require('./math');
console.log(add(2,3));
console.log(sub(10,2));



