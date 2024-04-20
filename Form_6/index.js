const USERNAME = "NombredeUsuario";
const PASSWORD = "12345";

const loginButton = document.getElementById("login");
const showPasswordCheckbox = document.getElementById("checkbox");

loginButton.onclick = buttonHandler;
showPasswordCheckbox.onclick = checkBoxHandler;


function buttonHandler(event) {
  event.preventDefault();
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  if (username === USERNAME && PASSWORD === password) {
    alert("Bienvenido")
    document.getElementById("form").style.display = "none";
  }
}

function checkBoxHandler() {
  const passwordInput = document.getElementById("password");
  passwordInput.type === "text" ? passwordInput.type = "password" : passwordInput.type = "text";
}