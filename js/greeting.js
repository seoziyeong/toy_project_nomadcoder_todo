const loginForm = document.querySelector("#login-form")
const loginInput = document.querySelector("#login-form input")
const greeting = document.querySelector("#greeting")

const HIDDEN_CLASSNAME = "hidden"
const USERNAME_KEY = "username"

// local storage 확인
const checkUsername = localStorage.getItem(USERNAME_KEY)

if (checkUsername === null) {
    loginForm.classList.remove(HIDDEN_CLASSNAME)
    loginForm.addEventListener("submit", onLoginSubmit)
} else {
    paintGreetings()
}

// 이름 입력
function onLoginSubmit(e) {
    e.preventDefault()
    loginForm.classList.add(HIDDEN_CLASSNAME)
    const username = loginInput.value
    localStorage.setItem(USERNAME_KEY, username)
    paintGreetings()
}
loginForm.addEventListener("submit", onLoginSubmit)

// 이름 출력 함수
function paintGreetings() {
    const username = localStorage.getItem(USERNAME_KEY)
    greeting.classList.remove(HIDDEN_CLASSNAME)
    greeting.innerText = `안녕하세요, ${username}님`
}




