'use strict';
// function fizzBuzzArray(countTo) {
//   const array = [];
//   let count = 1;
//   while (count <= countTo) {
//     if (count % 3 === 0 && count % 5 !== 0 ) {
//       array.push('fizz');
//     }
//     else if (count % 5 === 0 && count % 3 !== 0) {
//       array.push('buzz');
//     }
//     else if (count % 15 === 0) {
//       array.push('fizzbuzz');
//     }
//     else  {
//       array.push(count);
//     }
//     count++;
//   }
//   return array;
// }

function getFizzBuzzValue(num) {
  let val = null;
  if (num % 15 === 0) {
    val = 'fizzbuzz';
  }
  else if (num % 5 === 0) {
    val = 'buzz';
  }
  else if (num % 3 === 0) {
    val = 'fizz';
  }
  else {
    val = num;
  }
  return val;
  
}

function fizzBuzzArray(countTo) {
  const result = [];
  for (let i = 0; i <= countTo; i++) {
    const x = getFizzBuzzValue(i);
    result.push(x);
  }
  return result;
}

function processUserInputs(countTo) {
  const list = fizzBuzzArray(countTo);
  console.log(list);
  for (let i = 0; i < list.length; i++) {
    const element = $(`<div class='fizz-buzz-item'><span>${list[i]}</span></div>`);
    if (list[i] === 'fizz' || list[i] === 'buzz' || list[i] === 'fizzbuzz') {
      element.addClass(list[i]);
    }
    $('.js-results').append(element);
  }
}

function getUserInputs() {
    
  $('#number-chooser').submit(event => {
    
    event.preventDefault();
    const textInput = $(event.currentTarget).find('input[name="number-choice"]').val();
    console.log(textInput);
    processUserInputs(textInput);
    $(event.currentTarget).find('input[name="number-choice"]').val('');
  });
}

$(function() {
  getUserInputs();
});

