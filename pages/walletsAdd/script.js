import axios from "axios"
import { postData } from "../../libs/api"
import { createOption } from "../../components/Options"

axios("https://api.apilayer.com/currency_data/list", {
    method: "GET",
    headers: {
        "apikey": "PLZaIdjNtiHY9s5nEqnZ0wVcrzL7t2MZ"
    }
}).then(res => {
    console.log(res);

    createOption(res.data.currencies , "currency-select")
})

let form = document.forms.card_ADD
let userId = localStorage.getItem('userId')
form.onsubmit = (e) => {
    e.preventDefault()
    let user = {}

    let fn = new FormData(form)

    fn.forEach((v, k) => {
        user[k] = v
    })
    postData('wallets', { ...user, userId: userId, balance:5000})
        .then(res => {
            window.location.href = '/pages/wallets/'
        }
        )

}