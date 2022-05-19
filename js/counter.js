let counterValue = 0
const btnDecrease = document.getElementById('decrease')
const btnReset = document.getElementById('reset')
const btnIncrease = document.getElementById('increase')
const counter = document.getElementById('counter')
const btns = document.querySelectorAll('.btn')

btns.forEach(function (btn) {
  btn.addEventListener('click', function (e) {
    const styles = e.currentTarget.classList

    if (styles.contains('decrease')) {
      counterValue--
    } else if (styles.contains('increase')) {
      counterValue++
    } else counterValue = 0
    counter.textContent = counterValue
  })
})
