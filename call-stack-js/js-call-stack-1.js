
// To illustrate the call stack in chrome - dev tools

/*

const multiply = (x,y) => x * y;

const square = (x) => multiply(x, x);

const isRightTriangle = (a, b, c) => {
    return ( square(a) + square(b) === square(c) );
}

console.log( isRightTriangle(3, 4, 5) );

*/



// JS Single Threaded

console.log('Hello First !!! ');

setTimeout(function(){
    console.log('Hi Third !!!');
}, 3000)
//alert('Hi there #');

console.log('Hello Second !!!');

