

// fetch('api.github.com/users/vasilymur').then(res =>{
//   return res.json();
// }).then(res =>{
//   console.log(res)
// }).catch(err=>{
//   console.log('Error>>>',err)
// })

// async function getGitData() {
//  try {
//   const response = await fetch('https://api.github.com/users/vasilymur');
//   const data = await response.json();
//   console.log(data);
//  } catch (error) {
//   console.log('erro', error)
//  }
// }
// getGitData();


const video = document.querySelector('video');
// const myVideo = navigator.mediaDevices.getUserMedia({video:true}).then(mediaStream=>{
//   video.srcObject = mediaStream;
// }).catch(err=>{
//   console.log('Video errror >>>', err)
// })
// console.log(myVideo);

// const getUserVideo = async ()=>{
//   const response = await navigator.mediaDevices.getUserMedia({video:true});
//   video.srcObject = response;
// }

// getUserVideo();

function sleep(time) {
  return new Promise((resolve, reject)=>{
    if(time < 500){
      reject('Слишком мало сна!')
    }

    setTimeout(() => resolve(`Поспал ${time}`), time);
      
    
  })
}

const sleepSession = async ()=>{
try {
  const sleep1 = await sleep(1500);
  console.log(sleep1);
  const sleep2 = await sleep(1000);
  console.log(sleep2);
  const sleep3 = await sleep(500);
  console.log(sleep3);
  const sleep4 = await sleep(200);
  console.log(sleep4);
} catch (error) {
  console.log('error: ' + error)
}
}
sleepSession();
// sleep(1500).then(res=>{
//   console.log(res)
//   return sleep(1000);
// }).then(res =>{
//   console.log(res)
//   return sleep(500);
// }).then(res =>{
//   console.log(res);
//   return sleep(200);
// }).then(res =>{
//   console.log(res);
// }).catch(err=>{
//   console.log('Ошибка!!!', err)
// })


// setInterval(()=>console.log(Date.now()), 500)

