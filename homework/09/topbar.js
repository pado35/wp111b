function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}
  
window.onclick = function (e) {
    if (!e.target.matches('.dropbtn')) {
        var myDropdown = document.getElementById("myDropdown");
        if (myDropdown.classList.contains('show'))
            myDropdown.classList.remove('show');
    }
  }

let main = document.querySelector(".bigmargin")

let pages = {
    "#home":`
    <h1>首頁</h1>
    <p>本網頁可以按功能表去切換畫面</p>`,

    "#login":`
    <h1>登入</h1>
    <form>
        <label>請輸入帳號:</label>
        <input type="text" placeholder="帳號">
        <br><br>
        <label>請輸入密碼:</label>
        <input type="password" placeholder="密碼">
        <br><br>
        <input type="submit" value="登入">
        <input type="reset" value="重新輸入">
    </form>`,

    "#logout":`
    <h1>登出</h1>
    <p>請確定是否登出</p>
    <input type="submit" value="是">
    <input type="submit" value="否">`,

    "#signup":`
    <h1>註冊</h1>
    <form>
        <input type="text" placeholder="姓名">
        <br><br>
        <input type="text" placeholder="帳號">
        <br><br>
        <input type="password" placeholder="密碼">
        <br><br>
        <input type="email" placeholder="信箱">
        <br><br>
        <input type="submit" value="註冊">
        <input type="reset" value="重新輸入">
    </form>`
    
}

window.onhashchange = function () {
    let hash = window.location.hash
    main.innerHTML = pages[hash]
}