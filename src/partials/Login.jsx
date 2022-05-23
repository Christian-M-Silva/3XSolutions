import { Formik, Form, Field, ErrorMessage } from "formik"
import * as yup from "yup"

export function Login() {
    const getDateUserLogin = (values) => console.log(values)

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