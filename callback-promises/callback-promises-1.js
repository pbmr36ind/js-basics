// Promise Intro

// new promise object -- initially promise object will have pending state.
const willGetYouAGift = new Promise( (resolve, reject) => {
    
    const randomNum = Math.random();

    if(randomNum > 0.4) {
        console.log('Action : Resolve');
        resolve();
    }else{
        console.log('Action : Reject');
        reject();
    }

})

// If promise is of status 'Resolve' then call this code
willGetYouAGift.then( () => {

    // promise fullfilled
    console.log("You got a Gift.!!! ");

}).catch(() => {

    //promise rejected
    console.log(" :(  No Gift this year.");

})