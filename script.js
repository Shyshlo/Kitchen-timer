

gsap.from('.clock', { y: -300, duration: 3, delay: 1.5, ease: 'bounce', opacity: 1})

gsap.from('.textTime', { y: -300, duration: 1, opacity: 1})

gsap.from('.inputTime', { y: -300, duration: 1, opacity: 1})

gsap.from('.start', {y: 500, rotation: 360, delay: 1.5, duration: 2, opacity: 1})




function clock () {
    //время 
    const clockPlace = document.querySelector(".clockPlace");
    let date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    let day_night = "PM";
    if(hours > 12){
    day_night = "AM";
    hours = hours - 12;
    }
    if(seconds < 10){
    seconds = "0" + seconds;
    }
    if(minutes < 10){
    minutes = "0" + minutes;
    }
    if(hours < 10){
    hours = "0" + hours;
    }
    clockPlace.textContent = hours + ":" + minutes + ":" + seconds + " "+ day_night;
    };

    setInterval(clock, 1000);



//Cчетчик
const byttonStart = document.querySelector('.btnStart');
byttonStart.addEventListener('click', time);



function time() {
   
const minute = document.querySelector('#minutes').value;
let second = document.querySelector('#seconds').value;




const timer = Number(minute);    //минуты 
//далее переводим минуты в секунды
let amountTime = (timer * 60) + Number(second); //let - т.к. счет меняется всегда

function calculateTime() {
    const countdown = document.querySelector('#countdown');
  //можно проверить в консоль, но с вызовам ф-ции

  
  let minutes = Math.floor(amountTime/60);     //округление минут 
  let seconds = amountTime%60;   //рассчитываем сколько секунд будет(остаток который не вошел в минуты)

  if (seconds < 10) {
      seconds = '0' + seconds;    // добавляет 0 к секундам до 10
  }
  countdown.style.display = 'block';   //включили поле со счетчиком

  countdown.textContent = `${minutes} : ${seconds}`;
  amountTime--;    // к-й раз отнимаем и минуты и секунды
  

  if (amountTime < 0) {
      stopTimer();
      amountTime = 0;
  }

 
  function stopTimer() {
      clearInterval(timerID);
  }
}


let timerID = setInterval(calculateTime, 1000); //вызывает ф-ю каждую секунду

}



//аудио
const audio = document.querySelector('.myAudio');
byttonStart.addEventListener('click', playMusic);
function playMusic(){
    if(audio.paused){
        audio.play();
      
    }
    else{
        audio.pause();
       
    }
}


/*интересная анимация
/* ---- particles.js config ---- */

particlesJS("particles-js", {
    "particles": {
      "number": {
        "value": 140, //изменяется количество фигурок
        "density": {
          "enable": true,
          "value_area": 800
        }
      },
      "color": {
        "value": "#ffffff"
      },
      "shape": {
        "type": "circle",
        "stroke": {
          "width": 0,
          "color": "#000000"
        },
        "polygon": {
          "nb_sides": 5
        },
        "image": {
          "src": "img/github.svg",
          "width": 100,
          "height": 100
        }
      },
      "opacity": {
        "value": 0.3,
        "random": false,
        "anim": {
          "enable": false,
          "speed": 1,
          "opacity_min": 0.1,
          "sync": false
        }
      },
      "size": {
        "value": 3,
        "random": true,
        "anim": {
          "enable": false,
          "speed": 40,
          "size_min": 0.1,
          "sync": false
        }
      },
      "line_linked": {
        "enable": true,
        "distance": 150,
        "color": "#ffffff",
        "opacity": 0.4,
        "width": 1
      },
      "move": {
        "enable": true,
        "speed": 6,
        "direction": "none",
        "random": false,
        "straight": false,
        "out_mode": "out",
        "bounce": false,
        "attract": {
          "enable": false,
          "rotateX": 600,
          "rotateY": 1200
        }
      }
    },
    "interactivity": {
      "detect_on": "canvas",
      "events": {
        "onhover": {
          "enable": true,
          "mode": "grab"
        },
        "onclick": {
          "enable": true,
          "mode": "push"
        },
        "resize": true
      },
      "modes": {
        "grab": {
          "distance": 120,
          "line_linked": {
            "opacity": 1
          }
        },
        "bubble": {
          "distance": 400,
          "size": 40,
          "duration": 2,
          "opacity": 8,
          "speed": 3
        },
        "repulse": {
          "distance": 200,
          "duration": 0.4
        },
        "push": {
          "particles_nb": 4
        },
        "remove": {
          "particles_nb": 2
        }
      }
    },
    "retina_detect": true
  });
  







