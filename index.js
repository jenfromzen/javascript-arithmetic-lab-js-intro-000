var a, b

  a = Math.floor(Math.random() * 1000)
  b = Math.floor(Math.random() * 1000)

function add(a, b) {
  return a + b
}

function subtract(a, b) {
  return a - b
}

function multiply(a, b) {
  return a * b
}

function divide(a, b) {
  return a / b
}





it('divide(a, b) divides a by b and returns the result', function() {
  expect(divide(a, b)).toEqual(a / b)
})