function FizzBuzz() {
  var numbers = [];

  FizzBuzz.prototype.play = function(maxNumber) {
    for (i = 1; i < maxNumber + 1; i++) {
      if (i % 15 === 0) { numbers.push('FizzBuzz');}
      else if (i % 5 === 0) { numbers.push('Buzz');}
      else if (i % 3 === 0) { numbers.push('Fizz');}
      else { numbers.push(i);}
    }
   return numbers;

  };

};
var fizzbuzz = new FizzBuzz();
fizzbuzz.play(100);
