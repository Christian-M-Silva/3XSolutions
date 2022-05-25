import { Fragment } from "react"
import { Header } from "../partials/Header"
import Cookie from "js-cookie"


export function Welcome() {
    const response = Cookie.get("user")
    const user = JSON.parse(response)
    const exit = () => {
        window.location.href = "/"
        Cookie.set("user", "")
    }
    return(
        <Fragment>
            <Header />
            
            <h1 className="title-Welcome">Olá, seja bem vindo(a) <span className="name-user">{user.nameUser}</span></h1>

            <button className="button-exit" onClick={exit}>Sair</button>
        </Fragment>
    )
}