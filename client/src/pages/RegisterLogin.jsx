import { Fragment } from "react"
import { Header } from "../partials/Header"
import { Login } from "../partials/Login"
import { Register } from "../partials/Register"


export function RegisterLogin() {
    return(
        <Fragment>
            <Header />
            
            <div className="area-login-register">
                <Login />
                <Register /> 
            </div>
        </Fragment>
    )
}