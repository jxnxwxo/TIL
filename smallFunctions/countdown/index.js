const clockTitle = document.querySelector(".js-clock"),
  dDay = clockTitle.querySelector("h2");
function getTime() {
  const xmasDay = new Date("2021-12-24:00:00:00+0900");
  const today = new Date();
  const gap = xmasDay.getTime() - today.getTime();
  const date = Math.ceil(gap / (60 * 60 * 24 * 1000));
  const hours = Math.floor((gap % (60 * 60 * 24 * 1000)) / (60 * 60 * 1000));
  const minutes = Math.floor((gap % (60 * 60 * 1000)) / (60 * 1000));
  const seconds = Math.floor((gap % (60 * 1000)) / 1000);
  dDay.innerText = `${date < 10 ? `0${date}` : date}d  ${
    hours < 10 ? `0${hours}` : hours
  }h ${minutes < 10 ? `0${minutes}` : minutes}m  ${
    seconds < 10 ? `0${seconds}` : seconds
  }s `;
}

function init() {
  getTime();
  setInterval(getTime, 1000);
}
init();
