// const hand = querySelector(".hand");

setTime = () => {
  const time = new Date();

  //Analog clock
  seconds = time.getSeconds();
  console.log(`seconds = ${seconds}`);
  const second = document.querySelector(".second-hand");
  secondsInDeg = 90 + (seconds/60 * 360);
  second.style.transform = `rotate(${secondsInDeg}deg)`;

  //digital clock
  const setSecondsDigital = document.querySelector(".digi-seconds");
  setSecondsDigital.innerText = seconds;

  //Analog clock
  minutes = time.getMinutes();
  console.log(`minutes = ${minutes}`);
  const minute = document.querySelector(".min-hand");
  minutesInDeg = 90 + (minutes/60 * 360);
  minute.style.transform = `rotate(${minutesInDeg}deg)`;

  //digital clock
  const setMinutesDigital = document.querySelector(".digi-minutes");
  setMinutesDigital.innerText = minutes;

  //Analog clock
  hours = time.getHours();
  console.log(`hours = ${hours}`);
  const hour = document.querySelector(".hour-hand");
  hoursInDeg = 90 + (hours/12 * 360);
  hour.style.transform = `rotate(${hoursInDeg}deg)`;

  //digital clock
  const setHoursDigital = document.querySelector(".digi-hours");
  setHoursDigital.innerText = hours;

};

setInterval(setTime, 1000);


