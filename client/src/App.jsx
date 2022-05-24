import './Global.css'
import { Header } from './partials/Header'
import { Login } from './partials/Login'
import { Register } from './partials/Register'


export function App() {
    return(
        <div className="container-full-pai">
            <Header />
            
            <div className="area-login-register">
                <Login />
                <Register /> {/**Tenho que deixar a largura dos inputs e buttons responsivos pelo visto a area do login e e de registar parece igual, mas são diferentes tirando o input e o button ver as diferenças do login e do registro criar um area para o register, colocar fundo no registro e ver se consigo diminuir o title do register ara caber em uma só linha*/}
            </div>
        </div>
    )
}

