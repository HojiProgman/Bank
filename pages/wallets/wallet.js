import { Card } from "../../components/CreditCard";
import { header } from "../../components/header";
import { ShowUser } from "../../components/ShowUser";
import { getData } from "../../libs/api";
import { tokenSecurity } from "../../libs/security";
import { reload } from "../../libs/utils";

header()
tokenSecurity()
let userId = localStorage.getItem("userId")


getData(`wallets?userId=${userId}`)
    .then(res => {
        reload(res.data, document.querySelector('.mn_wallet'), Card)
    })

let addBtn = document.querySelector('.addCard')

addBtn.onclick = () =>[
    window.location.href = '/pages/walletsAdd/' 
]
getData(`users/${userId}`)
    .then(res => ShowUser(res.data))
