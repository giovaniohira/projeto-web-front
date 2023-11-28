var login = JSON.parse(window.localStorage.getItem("listaLogin") || "[]")
if (!login) {
    window.localStorage.setItem("listaLogin", "")
    login = []
}
var vol_users = window.localStorage.getItem("volUsers")
if(!vol_users) {
    window.localStorage.setItem("volUsers", "0")
    vol_users = 0
}

if (window.location.href.includes('nova-conta.html')) {
    document.getElementById("criar-conta").addEventListener("click", 
        () => {
            var email = document.getElementById("email").value
            var senha1 = document.getElementById("senha1").value
            var senha2 = document.getElementById("senha2").value
            const aviso_senha_incorreta = document.getElementById("aviso-senha-incorreta")
            if (senha1!=senha2) {
                aviso_senha_incorreta.style.display = "block"
            } else {
                aviso_senha_incorreta.style.display = "none"
                vol_users++
                login.push(
                    {
                        email: email,
                        senha: senha1,
                        id_usuario: vol_users
                    }
                )              
                window.localStorage.setItem("listaLogin", JSON.stringify(login))
                window.localStorage.setItem("volUsers", vol_users)
                window.location.href = "index.html"
            }
        }
    )
}

if (window.location.href.includes('index.html')) {
    document.getElementById("entrar").addEventListener("click", 
        () => {
            var email = document.getElementById("email").value
            var senha = document.getElementById("senha").value
            const aviso_senha_incorreta = document.getElementById("aviso-senha-incorreta")
            for (user of login) {
                if (email == user.email) {
                    if (senha != user.senha) {
                        aviso_senha_incorreta.style = "display: block"
                    } else {
                        window.sessionStorage.setItem("id_usuario", user.id_usuario)
                        window.location.href = "home.html"
                    }
                }
            }   
        }
    )
}