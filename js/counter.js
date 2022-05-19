let counterValue = 0
const btnDecrease = document.getElementById('decrease')
const btnReset = document.getElementById('reset')
const btnIncrease = document.getElementById('increase')
const counter = document.getElementById('counter')

btnDecrease.addEventListener('click', function () {
  counterValue = counterValue - 1
  counter.textContent = counterValue
})
btnReset.addEventListener('click', function () {
  counter.textContent = 0
})
btnIncrease.addEventListener('click', function () {
  counterValue = counterValue + 1
  counter.textContent = counterValue
})
