import { Card } from "../../components/CreditCard";
import { header } from "../../components/header";
import { ShowUser } from "../../components/ShowUser";
import { Table } from "../../components/Table";
import { getData } from "../../libs/api";
import { tokenSecurity } from "../../libs/security";
import { reload } from "../../libs/utils";

header()
tokenSecurity()

let userId = localStorage.getItem("userId")
getData(`users/${userId}`)
    .then(res => ShowUser(res.data))


getData(`transactions?userId=${userId}`)
    .then(res => {
        reload(res.data, document.querySelector('tbody'), Table)
    })

    let addBtn = document.querySelector('.addCard')

    
addBtn.onclick = () =>[
    window.location.href = '/pages/transactionAdd/' 
]