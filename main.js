import { header } from "./components/header";
import { ShowUser } from "./components/ShowUser";
import { reload } from "./libs/utils";
import { Card } from "./components/CreditCard";
import { Table } from "./components/Table";
import { getData } from "./libs/api";
import { tokenSecurity } from "./libs/security";

let userId = localStorage.getItem('userId')
// let token = localStorage.getItem('token')

header()
tokenSecurity()

getData(`users/${userId}`)
    .then(res => ShowUser(res.data))

getData(`wallets?userId=${userId}`)
    .then(res => {
        reload(res.data.slice(0,4), document.querySelector('.mn_wallet'), Card)
    })

getData(`transactions?userId=${userId}`)
    .then(res => {
        reload(res.data.slice(0,4), document.querySelector('tbody'), Table)
    })