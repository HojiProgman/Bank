export function ShowUser(item){
    let welName = document.querySelector('.wellcome_name')
    let welSurname = document.querySelector('.wellcome_surname')
    let welemail = document.querySelector('.email_mn')
    let heademail = document.querySelector('.email_header')

    heademail.innerHTML = item.email
    welemail.innerHTML = item.email
    welName.innerHTML = item.name
    welSurname.innerHTML = item.surname

}




