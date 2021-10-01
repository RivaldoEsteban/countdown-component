
const day = document.getElementById("dias");
const hour = document.getElementById("horas");
const minute = document.getElementById("minutos");
const second = document.getElementById("segundos");


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
  return remainTime
}

function countdown (maximumDate, message) {
  const container = document.getElementById("countdown");
  setInterval(() => {
    const time = countdownToMyBirthday(maximumDate);
    if (time.remainTime <= 1) {
      container.innerHTML = message;
    }
  }, 1000);
};

//formulario
const button = document.getElementById("button");
const input = document.getElementById("input");


button.addEventListener("click", () => {
  if(input.value) {
    countdown(input.value, "Se acabo el tiempo, vuelva a ingresar una fecha");
  } else {
    countdown('2022,08,08', "Se acabo el tiempo, vuelva a ingresar una fecha");
  }
})

