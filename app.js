// const button = document.querySelector('.btn')
// const buttonTwo = document.querySelector('.btnTwo')
// const handleClick = () => {
//   console.log('click -2')
// }
// button.addEventListener('click', handleClick)
// buttonTwo.addEventListener('click', handleClick)
// buttonTwo.removeEventListener('click' , handleClick)
// const buttons = document.querySelectorAll('.btn');
// // console.log(buttons);
// // buttons.addEventListener('click', function() {
// //   console.log('click')
// // }) // Выходит ошибка
// buttons.forEach(button =>{
//     button.addEventListener('click', function() {
//       console.log('clicked!') 
//     })
// })
// const buttons = document.querySelectorAll('.btn');
// const handleClick = (event) => {
//   console.log("target >",event.target)
//   console.log("curtarget >",event.currentTarget)
//   console.log(event.target === event.currentTarget)
//   // event.stopPropagation();
// }
// window.addEventListener('click', function(event) {
//   console.log("window click!", event.target)
//   event.stopPropagation();
// }, {capture:true})
// buttons.forEach(button => {
//   button.addEventListener('click', handleClick);
// })
// Hoisting / поднятие
// console.log(years);
// var years = 100;
// letsGo() 
// function letsGo(){
//   console.log('Go!!')
//   console.log(add(5,3))
// }
//   function add(a,b){
//     return a+b;}

// Замыкание
// function external() {
//   const externalVar = 'я - внешняя функция';
//   function internal() {
//     const internalVar = 'Я - внутренняя функция';
//     console.log('internalVar >', internalVar);
//     console.log('externalVar >', externalVar);
//   }
//   return internal;
// }
// const internalFn = external();
// internalFn();

// function createAddress(type) {
//   const address = type.toUpperCase(); 
//   return function(name) {
//     return `${address} ${name}`;
//   }
// }
// const addressGrazhdanin = createAddress('Гражданин');
// const addressGrazhdanka = createAddress('Гражданка');
// console.log(addressGrazhdanin('Василий'))
// console.log(addressGrazhdanka('Александра'))

// function createPlayer(name) {
//   let score = 0;
//   return function scoreCount(){
//     score++;
//     return `${name} - ${score} баллов!`
//   }
// }

// const playerOne = createPlayer('Василий')
// const playerTwo = createPlayer('Александра')


// Создать DIV
// const div = document.createElement('div');
// Добавить к нему класс wrapper
// div.classList.add('wrapper');
// Поместить его внутрь тега body
// const body = document.body; //document.querySelector('body');
// body.appendChild(div);
// // Создать заголовок H1 "DOM (Document Object Model)"
// const header = document.createElement('h1');
// header.textContent = 'DOM (Document Object Model)';
// // Добавить H1 перед DIV с классом wrapper
// div.insertAdjacentElement('beforebegin', header);
// // Создать список <ul> </ul>
// // Добавить в него 3 элемента с текстом "Один, два, три"
// const ul = `
// <ul>
//       <li>Один</li>
//       <li>Два</li>
//       <li>Три</li>
// </ul>
// `;
// // Поместить список внутрь элемента с классом wrapper
// div.innerHTML = ul;
// // Создать изображение
// const img = document.createElement('img');
// // Добавить атрбут source
// img.src = 'https://picsum.photos/240';
// // Добавить атрибут width со значением 240
// img.width = 240;
// // Добавить класс super
// img.classList.add('super');
// // Добавить свойство alt со значением "Super Man"
// img.alt = 'Super Man';
// // Поместить изображение внутрь элемента с классом wrapper
// div.appendChild(img);
// // Используя HTML строку, создать DIV с классом 'pDiv' + с 2-мя параграфами
// // const elemHTML = `
// // <div class='pDiv'>
//           <p>Параграф 1</p>
//           <p>Параграф 2</p>
// </div>`
// Поместить этот DIV до элемента <ul></ul>
// const ulList = div.querySelector('ul');
// ulList.insertAdjacentHTML('beforebegin', elemHTML)
// Добавить для 2-го параграфа класс text
// const pDiv = document.querySelector('.pDiv');
// pDiv.children[1].classList.add('text');
// Удалить 1-й параграф
// pDiv.firstElementChild.remove();
// Создать функцию generateAutoCard,
// которая принимает 3 аргумента: brand, color, year
// const generateAutoCard = (brand, color, year) => {
//     const curDate = new Date();
//     const curYear = curDate.getFullYear();
//     return `
//             <div class="autoCard">
//             <div>
//                     <h2>${brand.toUpperCase()} ${year}</h2>
//                     <p>Автомобиль ${brand.toUpperCase()} - ${year} года. Возраст авто - ${curYear - year} лет.</p>
//                     <p>Цвет: ${color}</p>
//                     <button type='button' class='btn'>Удалить</button>
//                     </div>
//            </div>
//     `
// }
// Функция должна возрващать разметку HTML:
// <div class="autoCard">
// <h2> BRAND YEAR</h2>
// <p>Автомобиль BRAND - YEAR года. Возраст авто - YEARS лет.</p>
// </div>
// Создать новый DIV с классом autos
// const carsDiv = document.createElement('div');
// carsDiv.classList.add('autos');
// // Создать 3 карточки авто, используя функцию generateAutoCard
// const carList = [
//   {brand: 'Tesla', year: 2015, color:'красный'},
//   {brand: 'Lexus', year: 2016, color:'серебристый'},
//   {brand: 'Nissan', year: 2012, color:'черный'}
// ]
// const carsHTML = carList.map(car => {
//   return generateAutoCard(car.brand, car.color, car.year);
// }).join('');
// // Поместить эти 3 карточки внутрь DIV с классом autos
// carsDiv.innerHTML = carsHTML;
// // Поместить DIV с классом autos на страницу DOM - до DIV с классом wrapper
// div.insertAdjacentElement('beforebegin', carsDiv);
// // Добавить кнопку Удалить на каждую карточку авто
// // При клике на кнопку - удалять карточку из структуры DOM
// // 1. Выбрать все кнопки
// const buttons = document.querySelectorAll('.btn');
// // 2. Создать функцию удаления
// function handleClick(e) {
//   const currentButton = e.currentTarget;
//   currentButton.closest('.autoCard').remove();
//   // console.log(currentButton.parentElement)
// }
// // 3. Использовать цикл - чтобы повестить обработчик события на каждую кнопку
// buttons.forEach(button =>{
//   button.addEventListener('click', handleClick)
// })



let name = 'Vasily';
let nameTwo = name;
name = 'stas';

let age =100;
let ageTwo = 15;
age =25;
// console.log(age);
// console.log(ageTwo);

const students = ['Сергей', 'Станислав', 'Мария', 'Павел'];
const group = students;
// group[2] = 'Александра';
// console.log(students);
// console.log(group);

const group2 = students.slice(0, 2);
group2[2]= 'Василий';
// console.log(students);
// console.log(group2);

const group3 = [].concat(students)
// console.log(group3);

const group4 = [...students];

const group5 = Array.from(students); 



const person = {
  name: 'Peter',
  age: 30
}

const student = person;
student.age = 100;
// console.log(person);
// console.log(student);

const fireman = Object.assign({}, person, {age: 38, height: '1.8m'});
// console.log(person)
// console.log(fireman)

const worker = {...person}
// console.log(worker)

const max = {
  name: 'Max',
  age: 20,
  social: {
    twitter: '@max',
    facebook: 'maxim'
  }
}

const max2 = Object.assign({}, max, {name: 'Max2', age: 100})
max2.social.facebook = 'max222222';
// console.log(max);
// console.log(max2);


const max3 = JSON.parse(JSON.stringify(max));
max3.social.facebook = 'max333333';

console.log(max);
console.log(max3);