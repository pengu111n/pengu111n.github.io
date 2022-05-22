const loginInput = document.querySelector("#login-form input");
const loginForm = document.querySelector("#login-form");
const greeting = document.querySelector("#greeting");
const loginbox = document.querySelector(".login-box");
const loginboxh2 = document.querySelector(".login-box h2");
const bodyURL = document.querySelector("body");

const HIDDEN_CLASSNAMES = "hidden";
const USERNAME_KEY = "username";

function onLoginSubmit(event) {
  event.preventDefault();
  setTimeout(location.reload(true), 10);
  loginForm.classList.add(HIDDEN_CLASSNAMES);
  loginbox.classList.add(HIDDEN_CLASSNAMES);
  loginboxh2.classList.add(HIDDEN_CLASSNAMES);
  const username = loginInput.value;
  localStorage.setItem(USERNAME_KEY, username);
  // greeting.innerText = "Hello " + username;
  paintGreetings(username);
  bodyURL.setAttribute("style", "background-image: url(img/0.jpg)");
  clock.classList.remove(HIDDEN_CLASSNAMES);
  toDoform.classList.remove(HIDDEN_CLASSNAMES);
  quote.classList.remove(HIDDEN_CLASSNAMES);
  author.classList.remove(HIDDEN_CLASSNAMES);
  weather.classList.remove(HIDDEN_CLASSNAMES);
  city.classList.remove(HIDDEN_CLASSNAMES);
}

function paintGreetings(username) {
  greeting.innerText = `Hello ${username}`;
  greeting.classList.remove(HIDDEN_CLASSNAMES);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null) {
  loginForm.classList.remove(HIDDEN_CLASSNAMES);
  loginForm.addEventListener("submit", onLoginSubmit);
  loginbox.classList.remove(HIDDEN_CLASSNAMES);
  loginboxh2.classList.remove(HIDDEN_CLASSNAMES);
} else {
  // show the greeting
  paintGreetings(savedUsername);
  loginbox.classList.add(HIDDEN_CLASSNAMES);
  loginboxh2.classList.add(HIDDEN_CLASSNAMES);
  bodyURL.setAttribute("style", "background-image: url(img/0.jpg)");
}
