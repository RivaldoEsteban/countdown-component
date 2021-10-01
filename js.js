const day = document.getElementById("dias");
const hour = document.getElementById("horas");
const minute = document.getElementById("minutos");
const second = document.getElementById("segundos");
const container = document.getElementById("countdown");
const button = document.getElementById("button");
const input = document.getElementById("input");


function countdownToMyBirthday(maximumDate) {
  const date = new Date();
  const remainTime = (new Date(maximumDate) - date + 1000) / 1000; //segundos
  const seconds = Math.floor(remainTime % 60)
    .toString()
    .padStart(2, "00");
  const minutes = Math.floor((remainTime / 60) % 60)
    .toString()
    .padStart(2, "00");
  const hours = Math.floor((remainTime / 3600) % 24)
    .toString()
    .padStart(2, "00");
  const days = Math.floor(remainTime / (3600 * 24))
    .toString()
    .padStart(2, "00");
  day.textContent = days
  hour.textContent = hours
  minute.textContent = minutes
  second.textContent = seconds
  return () =>{
    console.log('hola')
  }
}

function countdown (maximumDate) {
  setInterval(() => {
    countdownToMyBirthday(maximumDate);
  }
  , 1000)
};

button.addEventListener("click", () => {
  if(input.value) {
    countdown(input.value);
  } else {
    countdown('2022,08,08');
  }
})

