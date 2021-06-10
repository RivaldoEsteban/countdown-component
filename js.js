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

  return {
    remainTime,
    seconds,
    minutes,
    hours,
    days,
  };
}

const day = document.getElementById("dias");
const hour = document.getElementById("horas");
const minute = document.getElementById("minutos");
const second = document.getElementById("segundos");

const countdown = (maximumDate, finalMessage) => {
  const container = document.getElementById("countdown");
  const timerUpdate = setInterval(() => {
    const time = countdownToMyBirthday(maximumDate);
    day.textContent = time.days;
    hour.textContent = time.hours;
    minute.textContent = time.minutes;
    second.textContent = time.seconds;
    if (time.remainTime <= 1) {
      // container.innerHTML = finalMessage;
      return countdown("08 28 2021 19:10:17 GMT-0500", "countdown");
    }
  }, 1000);
};

//formulario
const form = document.getElementById("form");
const button = document.getElementById("button");
const input = document.getElementById("input");

button.addEventListener("click", (event) => {
  event.preventDefault();
  const date = new Date();
  const x = `${input.value}  ${date
    .getHours()
    .toString()
    .padStart(2, "00")}:${date.getMinutes().toString().padStart(2, "00")}:${date
    .getSeconds()
    .toString()
    .padStart(2, "00")} GMT-0500`;
  countdown(x, "tiempo finalizado"); //fecha , contenedor, mensaje
});

const cumplePaula = "10 28 2021 00:00:00 GMT-0500";
const cumpleRivaldo = "08 28 2021 00:00:00 GMT-0500";
const cumpleLeo = "12 08 2021 00:00:00 GMT-0500";

// countdown(cumpleRivaldo, "countdown", "tiempo finalizado");
