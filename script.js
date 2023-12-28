const buttonSubmit = document.querySelector(".btn-form");
const inputs = document.querySelectorAll(".form input");

function handleClick(e) {
  e.preventDefault();

  inputs.forEach((input) => {
    const parentDiv = input.parentElement;
    const info = input.nextElementSibling;

    if (input.value === "" || input.value === " ") {
      parentDiv.classList.add("error");
      info.innerText = `${input.getAttribute("placeholder")} cannot be empty`;
    } else {
      parentDiv.classList.remove("error");
    }
  });

  function validateEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  }

  const emailToValidate = document.getElementById("email-address");

  if (!validateEmail(emailToValidate.value)) {
    emailToValidate.parentElement.classList.add("error");
    emailToValidate.nextElementSibling.innerText =
      "Looks like this is not an email";
  } else {
    emailToValidate.parentElement.classList.remove("error");
  }
}

buttonSubmit.addEventListener("click", handleClick);
