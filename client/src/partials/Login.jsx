import { Formik, Form, Field, ErrorMessage } from "formik"
import * as yup from "yup"
import Axios from "axios"
import Cookie from "js-cookie"

export function Login() {
    const getDateUserLogin = async(values) => {

          const response = await Axios.post("http://localhost:3001/login", {
            email: values.email,
            password: values.senha,
          })

          Cookie.set("user" , JSON.stringify(response.data))
          if (!response.data.msg) {
            window.location.href = "/welcome"
          }else{
            alert("Senha ou Usuário inválido")
          }
        
      }

    const loginValidation = yup.object().shape({
        email: yup.string().email("Este dado não é um E-mail").required("Este campo é obrigatório"),
        senha: yup.string().required("Este campo é obrigatório")
    })
    return(
            <div className="area-login">
                <h1 className="title-login">ACESSE SUA CONTA</h1>

                <Formik initialValues={{}} onSubmit={getDateUserLogin} validationSchema={loginValidation}>
                    <Form>

                       
                            <Field name="email" placeHolder="E-mail" className="input-login"/>

                            <ErrorMessage component="span" name="email" className="error-message"/>
                        

                        
                            <Field name="senha" placeHolder="Senha" className="input-login"/>

                            <ErrorMessage component="span" name="senha" className="error-message"/>
                        

                        <button type="submit" className="button-login">Entrar</button> 
                    </Form>
                </Formik>
            </div>
    )
}