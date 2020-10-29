var value = 1;
function foo() {
  console.log(value);
}
function bar() {
  var value = 2;
  foo();
  function a() {
      console.log(value);
  }
}

function Foo() {
  var i = 0;
  return function() {
      console.log(i++);
  }
}

var f1 = Foo(),
  f2 = Foo();
f1();
f1();
f2();