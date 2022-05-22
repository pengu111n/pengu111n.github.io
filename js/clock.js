const clock1 = document.querySelector("h2#clock span:nth-child(1)");
const clock2 = document.querySelector("h2#clock span:nth-child(2)");
const clock3 = document.querySelector("h2#clock span:nth-child(3)");

function getClock() {
  const date = new Date();
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");

  clock1.innerText = `${hours} :`;
  clock2.innerText = `${minutes} :`;
  clock3.innerText = `${seconds}`;
}

getClock();
setInterval(getClock, 1000);

if (savedUsername === null) {
  clock.classList.add(HIDDEN_CLASSNAMES);
} else {
  clock.classList.remove(HIDDEN_CLASSNAMES);
}
