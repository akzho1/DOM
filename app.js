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
const buttons = document.querySelectorAll('.btn');
const handleClick = (event) => {
  console.log("target >",event.target)
  console.log("curtarget >",event.currentTarget)
  console.log(event.target === event.currentTarget)
  // event.stopPropagation();
}
window.addEventListener('click', function(event) {
  console.log("window click!", event.target)
  event.stopPropagation();
}, {capture:true})
buttons.forEach(button => {
  button.addEventListener('click', handleClick);
})
