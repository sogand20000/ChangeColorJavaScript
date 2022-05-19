var colors = ['red', 'green', 'pink', 'blue']
var btn = document.getElementById('btn')
var color = document.querySelector('.color')
btn.addEventListener('click', function () {
  var randomNumber = getRandomNumber()
  document.body.style.backgroundColor = colors[randomNumber]
  color.textContent = colors[randomNumber]
})
function getRandomNumber() {
  return Math.floor(Math.random() * colors.length)
}
