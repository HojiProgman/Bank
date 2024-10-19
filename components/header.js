export function header() {
  let header = document.querySelector('header')
  header.innerHTML = ` <div class="mn_continer">
      <div class="mn_header_box">
        <div class="header_left">
          <p><a href="/">Главная</a></p>
          <p><a href="/pages/wallets/">Мои кошельки</a></p>
          <p><a href="/pages/transaction/">Мои транзакции</a></p>
        </div>
        <div class="header_right">
          <p class="email_header">alexadams@google.com</p>
          <i class='bx bx-log-out bx-rotate-180' style='color:#ff0000' id="out"></i>
        </div>
      </div>
    </div>`

  let out = document.querySelector('#out')
  out.onclick = () => {
    localStorage.clear()
    window.location.replace('/pages/signin/')
  }
}