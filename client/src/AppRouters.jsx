import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom"
import { RegisterLogin } from './pages/RegisterLogin'
import { Welcome } from './pages/Welcome'
import Cookie  from "js-cookie"

export const AppRouters = () => {
    const user = Cookie.get("user") 
    return(
        <Router>
            <Routes>
                <Route  path='/' element={ <RegisterLogin />} />

                <Route  path="/welcome" element={<Welcome />} />
            </Routes>
        </Router>
    )
}