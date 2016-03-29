describe("FizzBuzz", function() {
  var array = [];
  var fizzbuzz;

  beforeEach(function(){
    fizzbuzz = new FizzBuzz();
    for (i=1; i < 101; i++) {
      array.push(i);
    }
  });

  it('returns an array of 100 elements', function() {
    expect(fizzbuzz.play(100).length).toEqual(100);
  });

  it('prints Fizz for any number divisible by 3', function(){
    expect(fizzbuzz.play(100)[2]).toEqual('Fizz');
    expect(fizzbuzz.play(100)[32]).toEqual('Fizz');
  });

  it('prints Buzz for any number divisible by 5', function(){
    expect(fizzbuzz.play(100)[4]).toEqual('Buzz');
  });

  it('prints FizzBuzz for any number divisible by 3 and 5', function(){
    expect(fizzbuzz.play(100)[29]).toEqual('FizzBuzz');
    expect(fizzbuzz.play(100)[74]).toEqual('FizzBuzz');
  });








});
