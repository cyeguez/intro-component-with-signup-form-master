const inputFirstName = document.getElementById("firstName");
const inputLastName = document.getElementById("lastName");
const inputEmail = document.getElementById("email");
const inputPassword = document.getElementById("password");
const button = document.getElementById("buttonSubmit");

/* ------------------------- errores personalizados ------------------------- */
const errorFirstName = document.getElementById("errorInputName");
const errorLastName = document.getElementById("errorInputLastName");
const errorEmail = document.getElementById("errorInputEmail");
const errorPassword = document.getElementById("errorInputPassword");

const message = {
  firstName: "Fist Name cannot be empty",
  lastName: "Last Name cannot be empty",
  email: "Looks like this is not an email",
  password: "Password cannot be empty",
};

function validation(valueInput, nameField, divError) {
  if (valueInput.length == 0) {
    showError(nameField, divError);
  } else {
    hideError(nameField, divError);
    divError.innerHTML = "";
  }
}

function showError(nameInput, divError) {
  nameInput.style.border = "1px solid red";
  divError.innerHTML = `<img src="./images/icon-error.svg" alt="error icon">;
    <span class="error-message " >${message[nameInput.name]}</span>`;
}
function hideError(nameField, divError) {
  nameField.style.border = "1px solid hsl(246, 25%, 77%)";
  divError.innerHTML = "";
}

function validationEmail(valueInput, nameInput, divError) {
  let exreg =
    /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g;
  if (exreg.test(valueInput)) {
    hideError(nameInput, divError); 
    inputEmail.style.color= 'black'
  } else {
    showError(nameInput, divError);
    inputEmail.style.color= 'red'
  }
}

button.addEventListener("click", (e) => {
  e.preventDefault();
  validation(inputFirstName.value, inputFirstName, errorFirstName);
  validation(inputLastName.value, inputLastName, errorLastName);
  validationEmail(inputEmail.value, inputEmail, errorEmail);
  validation(inputPassword.value, inputPassword, errorPassword);
});
