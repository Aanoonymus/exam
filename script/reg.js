const $form = document.querySelector("#form");
const $emailInput = document.querySelector("#email");
const $createEmail = document.querySelector("#email");
const $createPassword = document.querySelector("#password");
const $createName = document.querySelector("#name");
const $createAvatar = document.querySelector("#avatar");

$form.addEventListener("submit", createUser);

function createUser(e) {
  e.preventDefault();

  if (
    $createEmail.value.trim().length > 0 &&
    $createPassword.value.trim().length > 0 &&
    $createName.value.trim().length > 0 &&
    $createAvatar.value.trim().length > 0
  ) {
    fetch("https://api.escuelajs.co/api/v1/users", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        name: $createName.value,
        email: $createEmail.value,
        password: $createPassword.value,
        avatar: $createAvatar.value,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data) {
          window.location.replace(window.origin + "/index.html");
        }
      });
  }
}
