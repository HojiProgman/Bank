import { getData } from "../../libs/api"
import { validate } from "../../libs/validate"

let form = document.forms.login

form.onsubmit = (e) => {
    e.preventDefault()

    let fn = new FormData(form)

    let email = fn.get('email')
    let password = fn.get('password')

    let inps = document.querySelectorAll('input')
    let error = document.querySelector('.error_inp')
    let regex = {
        email: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
        password: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d@$.!%*?&]{8,}$/
    }
    if (validate(inps, regex)){
        getData(`users?email=${email}`)
            .then(res => {
                if (!res.data.length) {
                    error.innerHTML = 'Такого аккаунта нету' 
                    return
                }
                if (password == res.data[0].password) {
                    localStorage.setItem('token', res.data[0].token)
                    localStorage.setItem('userId', res.data[0].id)
                    window.location.replace('/')
                } else {
                    error.innerHTML = 'Не првильный пароль'
                }
            })
    }else{
        error.innerHTML = 'Неверный пароль или email'
    }

}