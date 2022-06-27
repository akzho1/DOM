// const button = document.querySelector('.btn')
// const buttonTwo = document.querySelector('.btnTwo')
// const handleClick = () => {
//   console.log('click -2')
// }
// button.addEventListener('click', handleClick)
// buttonTwo.addEventListener('click', handleClick)
// buttonTwo.removeEventListener('click' , handleClick)

const buttons = document.querySelectorAll('.btn');

// console.log(buttons);
// buttons.addEventListener('click', function() {
//   console.log('click')
// }) // Выходит ошибка

buttons.forEach(button =>{
    button.addEventListener('click', function() {
      console.log('clicked!')
   
    })
})
