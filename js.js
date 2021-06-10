// fecha actual
// const birthday = new Date("08 28 2021 19:10:17 GMT-0500 ");
// const coutdown = birthday - date;
// console.log(coutdown / 1000); //segundos
// console.log(coutdown / 1000 / 60); //minutos
// console.log(coutdown / 1000 / 60 / 60); //horas
// console.log(coutdown / 1000 / 60 / 60 / 24); //dias

const day = document.getElementById("dias");
const hour = document.getElementById("horas");
const minute = document.getElementById("minutos");
const seconds = document.getElementById("segundos");

// console.log(countdownToMyBirthday("08 28 2021 19:10:17 GMT-0500"));

const container = document.getElementById("countdown");

const countdown = (maximumDate, elem, finalMessage) => {
  const el = document.getElementById(elem);
  const timerUpdate = setInterval(() => {
    const date = new Date();
    function countdownToMyBirthday(maximumDate) {
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
    let t = countdownToMyBirthday(maximumDate);
    el.innerHTML = `
      <div>
        <p class="number" id="dias">${t.days}</p>
        <p class="txt">Días</p>
      </div>
      <div>
        <p class="number" id="horas">${t.hours}</p>
        <p class="txt">Horas</p>
      </div>
      <div>
        <p class="number" id="minutos">${t.minutes}</p>
        <p class="txt">Minutos</p>
      </div>
      <div>
        <p class="number" id='segundos'>${t.seconds}</p>
        <p class="txt">Segundos</p>
      </div>
    `;
    if (t.remainTime <= 1) {
      countdown("08 28 2021 19:10:17 GMT-0500", "countdown");
      el.innerHTML = finalMessage;
    }
  }, 1000);
};

const cumplePau = "";

countdown("10 28 2021 00:00:00 GMT-0500", "countdown", "tiempo finalizado");
