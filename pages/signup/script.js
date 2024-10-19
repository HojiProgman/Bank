import { generateToken } from "../../libs/token.js"
import { getData, postData } from "../../libs/api.js"
import { validate } from "../../libs/validate.js"

let form = document.forms.auth
let emailInp = document.querySelector('.email_inp')
let email_inp_text = document.querySelector('.email_inp_text')
form.onsubmit = (e) => {
    e.preventDefault()
    let user = {}

    let fn = new FormData(form)

    fn.forEach((v, k) => {
        user[k] = v
    })
    let email = fn.get('email')

    let inps = document.querySelectorAll('input')
    let regex = {
        name: /^[A-Za-zА-Яа-яЁё\s'.-]+$/,
        surname: /^[A-Za-zА-Яа-яЁё\s'.-]+$/,
        email: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
        password: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d@$.!%*?&]{8,}$/
    }
    let error = document.querySelector('.error_inp')
    if(validate(inps,regex)){
        getData(`users?email=${email}`)
            .then(res => {
                if (!res.data.length) {
                    console.log(res);
                    postData('users', { ...user, token: generateToken() })
                        .then((res) => {
                            window.location.replace('/')
                            localStorage.setItem('token', res.data.token)
                            localStorage.setItem('userId', res.data.id)
                        })
                        .catch((error) => console.error(error))
                } else {
                    emailInp.style.border = '3px solid red'
                    email_inp_text.innerHTML = 'Tакой польз уже существует'
                    email_inp_text.style.color = 'red'
                    email_inp_text.style.margin = '-10px 0 10px 0 '
                    email_inp_text.style.fontSize = '10px'
                }
            })
    }else{
        error.innerHTML = 'Заполни форму правильно'
    }
}
