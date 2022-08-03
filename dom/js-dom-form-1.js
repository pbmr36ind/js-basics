
/*
//form

const form1 = document.querySelector("#signup-form");

//other attrs
const creditCard = document.querySelector("#creditCard");
const terms = document.querySelector("#termsCheck");
const veggie = document.querySelector("#veggieSelect");


form1.addEventListener('submit', function(evt){

  
  console.log('Submitted the form');

  console.log('cc : ', creditCard.value);
  console.log('terms : ', terms.checked);
  console.log('veggie : ', veggie.value);
  
  // stops the form from getting submitted
  evt.preventDefault();

})

*/

/*

// track the keys pressed in the credit card
creditCard.addEventListener('keyup', function(evt){

    console.log('key:', evt.key);

    if(evt.key === '$') {
        alert('No symbol $ is allowed.');
    }

})

*/

/*

// construct a datastructure to store form input 

const formData = {};

creditCard.addEventListener('input', function(evt){
  
  // populate the form data
  formData['cc'] =this.value;

})

terms.addEventListener('input', function(evt){
  
  // populate the form data
  formData['terms'] = this.checked;

})

veggie.addEventListener('input', function(evt){
  
  // populate the form data
  formData['veggie'] = this.value;

})

*/


// Add event listeners for multiple elements at one time
//   and reading their values.

const creditCard = document.querySelector("#creditCard");
const terms = document.querySelector("#termsCheck");
const veggie = document.querySelector("#veggieSelect");

const formData = {};

for( let input of [creditCard, terms, veggie]) {

  input.addEventListener('input', (evt) => {

    if(evt.target.type === 'checkbox') {
      formData[evt.target.id] = evt.target.checked;
    }else{
      formData[evt.target.id] = evt.target.value;
    }

  })

}