const PasswordBox = document.getElementById("Password");
const length = 12;

const upperCase = "QWERTYUIOPASDFGHJKLZXCVBNM";
const lowerCase = "qwertyuiopasdfghjklzxcvbnm";
const number = "01234566789";
const symbols = "!@#$%^&*()_+*/-";

const btn = document.getElementsByTagName("button")[0];
btn.addEventListener("click", createPassword);

const allChars = upperCase + lowerCase + number + symbols;
function createPassword() {
  let password = "";
  password += upperCase[Math.floor(Math.random() * upperCase.length)];
  password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
  password += number[Math.floor(Math.random() * number.length)];
  password += symbols[Math.floor(Math.random() * symbols.length)];

  while (length > password.length) {
    password += allChars[Math.floor(Math.random() * allChars.length)];
  }
  PasswordBox.value = password;
}
