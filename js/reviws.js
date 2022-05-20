const reviews = [
  {
    id: 1,
    author: 'sara ahmadi',
    job: 'web developer',
    img: 'https://img.freepik.com/free-photo/portrait-charming-middle-aged-attractive-woman-with-blonde-hair_273609-48348.jpg?w=740&t=st=1653058203~exp=1653058803~hmac=460249193f49ac21bb749c1f09996bb72162b3f3bdd6e63b11bdfafc2ed38500',
    text: 'Hello all, I am sara ahmadi, Health and Medical advisor for the last 5 Years. Even write a lot of blogs related to Health. Hello all, I am Jack Edward, Health and Medical advisor for the last 5 Years. Even write a lot of blogs related to Health. ',
  },
  {
    id: 2,
    author: 'mina karimi',
    job: 'doctor',
    img: 'https://img.freepik.com/free-photo/caucasion-woman-casual-confident-concept_53876-137678.jpg?size=626&ext=jpg&ga=GA1.2.2006014089.1648879436',
    text: 'Hello all, I am mina karimi, Health and Medical advisor for the last 5 Years. Even write a lot of blogs related to Health. Hello all, I am Jack Edward, Health and Medical advisor for the last 5 Years. Even write a lot of blogs related to Health. ',
  },
  {
    id: 3,
    author: 'ali kermani',
    job: 'Nursing Assistant',
    img: 'https://img.diverseeducation.com/files/base/diverse/all/image/2021/10/1x1/rartis.6166044e9a85a.png?auto=format%2Ccompress&fit=max&w=1280',
    text: 'Hello all, I am ali kermani, Health and Medical advisor for the last 5 Years. Even write a lot of blogs related to Health. Hello all, I am Jack Edward, Health and Medical advisor for the last 5 Years. Even write a lot of blogs related to Health. ',
  },
  {
    id: 4,
    author: 'somaye ghanavati',
    job: 'Project Manager',
    img: 'https://static01.nyt.com/images/2019/11/17/books/review/17Salam/Salam1-jumbo.jpg?quality=75&auto=webp',
    text: 'Hello all, I am somaye ghanavati, Health and Medical advisor for the last 5 Years. Even write a lot of blogs related to Health. Hello all, I am Jack Edward, Health and Medical advisor for the last 5 Years. Even write a lot of blogs related to Health. ',
  },
]

const img = document.getElementById('person-img')
const author = document.getElementById('author')
const job = document.getElementById('job')
const text = document.getElementById('info')
const prevbtn = document.querySelector('.prev-btn')
const nextbtn = document.querySelector('.next-btn')
const supriseMe = document.getElementById('btnSupriseMe')
let currentItem = 0

window.addEventListener('DOMContentLoaded', function () {
  showPerson(currentItem)
})

function showPerson() {
  const item = reviews[currentItem]
  img.src = item.img
  author.textContent = item.author
  job.textContent = item.job
  text.textContent = item.text
}
nextbtn.addEventListener('click', function () {
  currentItem++
  if (currentItem > reviews.length - 1) currentItem = 0
  showPerson()
})
prevbtn.addEventListener('click', function () {
  currentItem--
  console.log(currentItem)
  if (currentItem < 0) currentItem = reviews.length - 1
  showPerson()
})
supriseMe.addEventListener('click', function () {
  currentItem = Math.floor(Math.random() * reviews.length)
  showPerson()
})
