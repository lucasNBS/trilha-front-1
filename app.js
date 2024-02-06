// form & pop-up
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

// aside mobile
const openButton = document.querySelector(".menu-button")
const closeButton = document.querySelector(".close-button")
const aside = document.querySelector(".aside-container")
const background = document.querySelector(".background")

openButton.addEventListener("click", open)
closeButton.addEventListener("click", close)
background.addEventListener("click", close)

function open() {
  background.classList.add("show")
  aside.classList.add("open")
}

function close() {
  background.classList.remove("show")
  aside.classList.remove("open")
}