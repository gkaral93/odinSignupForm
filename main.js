const email = document.querySelector("#email");
const phone = document.querySelector("#phone");
const password = document.querySelector("#password");
const confirmPassword = document.querySelector("#confirm-password");
const errorMessage = document.querySelector(".errorMessage");

const inputs = [email, phone, password, confirmPassword];

inputs.forEach((item) => { //when user focus to a field errors disappear
  item.addEventListener("focusin", () => {
    errorMessage.textContent = "";
    item.classList.remove("error");    //Field gets red outline using css
    if (item == password || item == confirmPassword) {
      password.classList.remove("error");
      confirmPassword.classList.remove("error");
    }
  });
});

const submit = (e) => {
  e.preventDefault();
  if (password.value !== confirmPassword.value) {
    password.classList.add("error");
    confirmPassword.classList.add("error");
    errorMessage.textContent = "Passwords don't match";
    return;
  }

  if(
    !phone.value.match(/(?:(?:\+?1\s*(?:[.-]\s*)?)?(?:(\s*([2-9]1[02-9]|[2-9][02-8]1|[2-9][02-8][02-9])\s*)|([2-9]1[02-9]|[2-9][02-8]1|[2-9][02-8][02-9]))\s*(?:[.-]\s*)?)([2-9]1[02-9]|[2-9][02-9]1|[2-9][02-9]{2})\s*(?:[.-]\s*)?([0-9]{4})/)
  ){
    phone.classList.add('error');
    errorMessage.textContent='Incorrect phone number'
    return;
  }

  if (password.value.length < 8) {
    password.classList.add("error");
    errorMessage.textContent = "Password must be at least 8 chars";
    return;
  }
  if (!password.value.match(/[a-z]/)) {
    password.classList.add("error");
    errorMessage.textContent = "Password not contains lower case";
    return;
  }
  if (!password.value.match(/[A-Z]/)) {
    password.classList.add("error");
    errorMessage.textContent = "Password not contains upper case";
    return;
  }
  if (!password.value.match(/\d+/g)) {
    password.classList.add("error");
    errorMessage.textContent = "Password not contains numbers";
    return;
  }
  errorMessage.textContent='Form submitted!'
}

const form=document.querySelector('form')
form.addEventListener('submit',submit)