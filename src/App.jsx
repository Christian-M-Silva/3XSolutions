import './App.css'
import { Header } from './partials/Header'
import { Login } from './partials/Login'
import { Register } from './partials/Register'

export function App() {
    return(
        <div className="h-screen bg-white">
            <Header />
            
            <div className="flex items-center justify-center gap-64 flex-wrap border-2 py-5">
                <Login />
                <Register />
            </div>
        </div>
    )
}

