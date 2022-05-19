var color = ['red', 'green', 'pink', 'blue'];
var btn = document.getElementById('#btn');
var color = document.querySelector('.color');
btn.addEventListener('click', function () {
    var randomNumber = getRandomNumber();
    document.body.style.backgroundColor = color[randomNumber];
    color.textContent = color[randomNumber];
});
function getRandomNumber() {
    return Math.floor(Math.random() * color.length);
}
