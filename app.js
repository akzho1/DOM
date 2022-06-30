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

function createAddress(type) {
  const address = type.toUpperCase(); 
  return function(name) {
    return `${address} ${name}`;
  }
}
const addressGrazhdanin = createAddress('Гражданин');
const addressGrazhdanka = createAddress('Гражданка');
console.log(addressGrazhdanin('Василий'))
console.log(addressGrazhdanka('Александра'))

function createPlayer(name) {
  let score = 0;
  return function scoreCount(){
    score++;
    return `${name} - ${score} баллов!`
  }
}

const playerOne = createPlayer('Василий')
const playerTwo = createPlayer('Александра')


