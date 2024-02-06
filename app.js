const form = document.querySelector(".form-container")

form.addEventListener("submit", (e) => submitForm(e))

function submitForm(e) {
  e.preventDefault()

  const name = document.querySelector("#name").value
  const email = document.querySelector("#email").value
  const password = document.querySelector("#password").value
  const game = document.querySelector("#game").value

  const popup = document.querySelector(".subscribe-pop-up")
  popup.classList.add("show")

  setTimeout(() => {
    popup.classList.remove("show")
  }, 5000)

  form.reset()
}