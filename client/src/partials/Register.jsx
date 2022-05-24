import { Formik, Form, Field, ErrorMessage } from "formik"
import * as yup from "yup"
import Axios from "axios"

export function Register() {
    const getDateUserRegister = (values) => {
        Axios.post("http://localhost:3001/register", {
            nameUser: values.nameUser,
            email: values.email,
            password: values.password,
        }).then((response) => {
            alert(response.data.msg)
            console.log(response)
        })
    }

    const RegisterValidation = yup.object().shape({
        nameUser: yup.string().required("Esse campo é obrigatório"),
        email: yup.string().email("Este dado não é um E-mail").required("Este campo é obrigatório"),
        senha: yup.string().required("Este campo é obrigatório").matches( /^(?=.*[A-Z])(?=.*[0-9])/, "A senha tem que ter uma letra maiúscula e um número") 
    })
    return(
            <div className="area-register">
                <h1 className="title-register">AINDA NÃO TEM SUA CONTA? CADASTRE-SE AQUI, É RÁPIDO E FÁCIL ;)</h1>

                <Formik initialValues={{}} onSubmit={getDateUserRegister} validationSchema={RegisterValidation}>
                    <Form>
                        <div className="area-input-register">
                            <div>
                                <Field name="nameUser" placeHolder="Nome do usuário" className="input-register"/>

                                <ErrorMessage component="span" name="nameUser" className="error-message"/>
                            </div> 
                            <div>
                                <Field name="email" placeHolder="E-mail" className="input-register"/>

                                <ErrorMessage component="span" name="email" className="error-message"/>
                            </div> 

                            <div>
                                <Field name="senha" placeHolder="Senha" className="input-register"/>

                                <ErrorMessage component="span" name="senha" className="error-message"/>
                            </div>

                            <button type="submit" className="button-register">Cadastrar</button> 
                        </div>
                    </Form>
                </Formik>
            </div>
    )
}