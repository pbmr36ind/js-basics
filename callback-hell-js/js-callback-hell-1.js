
//Callback - hell

//const btn1 = document.querySelector('button');

/*
// Move button in nested setTimeout call

setTimeout( ()=> {
    btn1.style.transform = 'translateX(100px)';

    setTimeout( ()=> {
        btn1.style.transform = 'translateX(200px)';

        setTimeout( ()=> {
            btn1.style.transform = 'translateX(300px)';

            setTimeout( ()=> {
                btn1.style.transform = 'translateX(400px)';
            }, 1000);

        }, 1000);

    }, 1000);

}, 1000);
*/

/*
// call function with another function to callback. 
moveRight(btn1, 100, 1000, ()=>{
    moveRight(btn1, 100, 1000, ()=>{
        moveRight(btn1, 200, 1000, ()=> {
            moveRight(btn1, 200, 1000);
        });
    });
});

*/


/*
 * Move buttons using two call back functions (one for success and one for failure). 
*/

/*
const btn1 = document.querySelector('button');

// alternate way to move the button. 
const moveRight = (element, numOfPx, delay, successCallbackFn, failCallbackFn) => {

    const screenBoundary = document.body.clientWidth;

    const elmLeft = element.getBoundingClientRect().left;
    const elmRight = element.getBoundingClientRect().right;

    if( (elmRight + numOfPx) > screenBoundary) {

        failCallbackFn();

    } else {

        setTimeout( () => {

            element.style.transform = `translateX(${elmLeft + numOfPx}px)`;
    
            if(successCallbackFn)
                successCallbackFn();
    
        }, delay)

    }
}

//

moveRight(btn1, 100, 1000, ()=>{

    //success
    moveRight(btn1, 100, 1000, ()=>{
        //success
        moveRight(btn1, 100, 1000, ()=>{
            // success
            moveRight(btn1, 100, 1000, ()=>{
                //success
            }, ()=>{
                //failure
                console.log("Reached End");
            })
        }, ()=>{
            // failure
            console.log("Reached End");
        });

    }, ()=>{
        // failure
        console.log("Reached End");
    })
    
}, ()=>{
    // failure
    console.log("Reached End");
})


// the above code is a sample for callback hell.

*/

// Improve using Chaining of Promises

const moveRight = (element, numOfPx, delay) => {

    return new Promise( (resolve, reject) => {

        setTimeout( () => {
            const screenBoundary = document.body.clientWidth;

            const elmLeft = element.getBoundingClientRect().left;
            const elmRight = element.getBoundingClientRect().right;
    
            if( (elmRight + numOfPx) > screenBoundary) {
    
                reject();
        
            } else {
                console.log('Move Right');
                element.style.transform = `translateX(${elmLeft + numOfPx}px)`;
                resolve();
            }
        }, delay) 

    })
}

//element to move 
const btn1 = document.querySelector('button');

moveRight(btn1, 100, 1000)
.then( () =>  moveRight(btn1, 100, 1000))
.then( () =>  moveRight(btn1, 100, 1000))
.then( () =>  moveRight(btn1, 100, 1000))
.then( () =>  moveRight(btn1, 100, 1000))
.then( () =>  moveRight(btn1, 100, 1000))
.catch( () => {
    // failure
    console.log("Reached End");
})