import { getData, postData } from "../../libs/api"
import { createOption } from "../../components/Options"

let userId = localStorage.getItem('userId')

getData(`wallets?userId=${userId}`)
    .then(res => createOption(res.data, "walletSelect"))

let form = document.forms.transaction_add
form.onsubmit = (e) => {
    e.preventDefault()
    let user = {}

    let fn = new FormData(form)

    fn.forEach((v, k) => {
        user[k] = v
    })

    let date = new Date()
    let year = date.getFullYear().to
    let month = date.getMonth() + 1
    let day = date.getDate()

    postData('transactions', {
        ...user, userId: userId,
        createAt: `${year}-${month}-${day}`
    })
        .then(res => {
            window.location.href = '/pages/transaction/'
        }
        )

}