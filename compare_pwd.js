const pwd = document.getElementById('pwd')
const pwd_confirm = document.getElementById('pwd-confirm')
const error_msg = document.getElementById('match_error_msg')

function comparePwds() {
    pwd.classList.toggle('error', pwd.value != pwd_confirm.value)
    pwd_confirm.classList.toggle('error', pwd.value != pwd_confirm.value)

    error_msg.toggleAttribute("hidden", !pwd.classList.contains('error') && !pwd_confirm.classList.contains('error'))
}

pwd.addEventListener("input", comparePwds)
pwd_confirm.addEventListener("input", comparePwds)