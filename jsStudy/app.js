const loginForm = document.querySelector("#login-form");
const loginInput = loginForm.querySelector("input");
const loginButton = loginForm.querySelector("button");
console.log(loginInput);
console.log(loginButton);

function clickButton() {
  const username = loginInput.value;
  console.log(username);
  alert(username);
}
loginForm.addEventListener("submit" , clickButton);