document.getElementById('button-id').addEventListener('click', calc)
const output = document.getElementById('output-id')
let a
let size

function calc () {
  size = document.getElementById('input-size').value
  a = document.getElementById('input-toppings').value
  if (a === '1') { a = 1 }
  if (a === '2') { a = 1.75 }
  if (a === '3') { a = 2.50 }
  if (a === '4') { a = 3.35 }
  console.log(a)
  if (size === 'xlarge') {
    output.innerHTML = (10 + a) * 1.13
  } else if (size === 'large') {
    output.innerHTML = (6 + a) * 1.13
  }
}
