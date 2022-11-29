console.log('working')

// Original

const sampleArr = [5,6,7];

function double(arr) {
    return arr.map(function(val) {
        return val * 2;
    });
}

// Refactored to ES2015

// const doubleShort = (arr) => {
//     return arr.map(function(val) {
//         return val * 2;
//     });
// }

// const doubleShortA = (arr) => {
//     return arr.map((val) => {
//         return val * 2;
//     });
// }

// ANSWER -

const doubleShortB = (arr => arr.map((val) => val * 2));

//

// Original

function squareAndFindEvens(numbers){
    var squares = numbers.map(function(num){
      return num ** 2;
    });
    var evens = squares.filter(function(square){
      return square % 2 === 0;
    });
    return evens;
  }

// Refactored to ES2015

const squareAndFindEvensA = (numbers) => {
    var squares = numbers.map(function(num){
      return num ** 2;
    });
    var evens = squares.filter(function(square){
      return square % 2 === 0;
    });
    return evens;
  }

const squareAndFindEvensB = (numbers) => {
    var squares = numbers.map((num) => {
      return num ** 2;
    });
    var evens = squares.filter((square) => {
      return square % 2 === 0;
    });
    return evens;
  }

// const squareAndFindEvensC = (numbers => evens.filter((numbers.map((num) => num ** 2))) % 2 ===0 ? evens : );

const squareAndFindEvensD = numbers => (numbers.map((num) => num ** 2)).filter(square => square % 2 === 0)

//