var color = ['red', 'green', 'pink', 'blue']
var btn = document.getElementById('#btn')
const color = document.querySelector('.color')
btn.addEventListener('click', function () {
  const randomNumber = getRandomNumber()
  document.body.style.backgroundColor = color[randomNumber]
  color.textContent = color[randomNumber]
})
function getRandomNumber() {
  return Math.floor(Math.random() * color.length)
}
