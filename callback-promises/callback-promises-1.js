// Promise Intro

// code piece - 1

/*

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

*/

// code piece - 2

/*
// promise - decide whether to fullfil or reject  after 5 secs
const willGetYouAGift = new Promise( (resolve, reject) => {
    
    // decide whether the promise is resolved or rejected after 5 seconds 

    setTimeout( ()=>{

        const randomNum = Math.random();

        if(randomNum > 0.4) {
            console.log('Action : Resolve');
            resolve();
        }else{
            console.log('Action : Reject');
            reject();
        }

    }, 5000 );

})

// If promise is of status 'Resolve' then call this code
willGetYouAGift.then( () => {

    // promise fullfilled
    console.log("You got a Gift.!!! ");

}).catch(() => {

    //promise rejected
    console.log(" :(  No Gift this year.");

})
*/

/*
// Return a promise from function - 
const makeAGiftPromise = () => {

    return new Promise( (resolve, reject) => {

        // decide after 5 seconds 
        setTimeout( ()=>{

            const randomNum = Math.random();

            if(randomNum > 0.4) {
                console.log('Action : Resolve');
                resolve();
            }else{
                console.log('Action : Reject');
                reject();
            }

        }, 5000 );

    });

};

// call the function and execute logic based on the promise returned
makeAGiftPromise().then( () => {

    // promise fullfilled
    console.log("You got a Gift.!!! ");

}).catch(() => {

    //promise rejected
    console.log(" :(  No Gift this year.");

})

*/


// code piece - 3

/*
// Return promise object with value in Return or Resolve. 
//  And access them in then() or catch()
const fakeRequest = (url) => {

    return new Promise ( (resolve, reject)=> {
        setTimeout( ()=>{

            // data structure sample
            const pages = {
                '/users' : [
                    { id : 1, username : 'Praveen'},
                    { id : 2, username : 'Raj'}
                ],
                '/about' : 'This is the about page !'
            }

            // find the data based on the url passed
            const pageData = pages[url];

            if(pageData) {
                resolve( 
                    // success object and page data
                    {
                        status   : 200, 
                        data    : pageData 
                    }
                );
            } else {
                reject( 
                    // return an obj representing error
                    {
                        status : 404
                    }
                );
            }
                     
        }, 2000);
    })
};

// call the function
fakeRequest('/books').then((res) => {
    
    console.log("Request worked.", res.status);
    console.log("Output data :", res.data );

}).catch((res) => {
    
    console.log("Request failed.", res.status);

}); 

*/


// code piece - 4 - Chaining of Promises

const bookRequest = (url) => {

    return new Promise ( (resolve, reject)=> {
        setTimeout( ()=>{

            // books - data structure sample
            const pages = {

                '/about' : 'This is the about page !',

                '/books' : [
                    { id : 1, bookname : 'Mithavai'},
                    { id : 2, bookname : 'Rubber'}
                ],

                '/books/1' : {
                    id : 1,
                    bookname : 'Mithavai',
                    author : 'Nanjil',
                    reviewId : 7
                },

                '/books/2' : {
                    id : 2,
                    bookname : 'Rubber',
                    author : 'Jemo',
                    reviewId : 8
                },     
                
                '/review/7' : {
                    content : 'This is an awesome book.'
                }
                
            }

            // find the data based on the url passed
            const bookData = pages[url];

            if(bookData) {
                resolve( 
                    // success object and page data
                    {
                        status   : 200, 
                        data    : bookData 
                    }
                );
            } else {
                reject( 
                    // return an obj representing error
                    {
                        status : 404
                    }
                );
            }
                     
        }, 2000);
    })
};



/*

// pretend the data is from real api 


// This looks similar to callback hell - promise hell.
// call the function using a url - 
fakeRequest('/books').then( (res) => {

    const bookId = res.data[0].id;

    fakeRequest(`/books/${bookId}`).then( (res) => {

        console.log( res );

    })
    
});

*/

// Chaining of Promises

// request for book details when the initial request is fulfilled. 
// if there is a rejection at any level, the catch() will capture 


bookRequest('/books').then( (res) => {

    console.log(`Book Name : ${res.data[0].bookname } `);

    //get frst book id
    const bookId = res.data[0].id;
    return bookRequest(`/books/${bookId}`);
   
}).then( (res) => {

    console.log(`Review Id : ${res.data.reviewId} `);

    const reviewId = res.reviewId;
    return bookRequest(`/review/${res.data.reviewId}`);

}).then( (res) => {

    const review = res.data.content;
    console.log(`Book Review : ${review}`);

}).catch( (err) => {
    
    console.log('Error. Please contact admin.', err);

});