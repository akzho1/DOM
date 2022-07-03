const auto = {
  brand: 'Tesla',
  mode: 'ModelX',
  // details: {
  //   color: 'Красный',
  //   year: 2021,
  //   atStock: true
  // }
}
const cars = [auto];

cars.forEach(car => {
  console.log(`${car.brand} ${car.details?.year}: цвет - ${car.details?.color}`)
})


const autoDrive = {
  brand: 'Tesla',
  mode: 'ModelX',
  // drive(){
  //   console.log('rrrrrr')
  // }
}
autoDrive.drive?.();

const autoNull = null;
console.log(autoNull?.['brand']);