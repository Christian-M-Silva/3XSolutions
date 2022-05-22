import { Formik, Form, Field, ErrorMessage } from "formik"
import * as yup from "yup"

export function Login() {
    const getDateUserLogin = (values) => console.log(values)

    return(
            <div className="border h-40 w-64 flex flex-col gap-3">
                <h1>Acesse sua conta</h1>

                <Formik initialValues={{}} onSubmit={getDateUserLogin}>
                    <Form>
                        <div>
                            <Field type="email" name="email" placeHolder="E-mail" />

                            <ErrorMessage component="span" name="email"/>
                        </div> 

                        <div>
                            <Field type="password" name="senha" placeHolder="Senha" />

                            <ErrorMessage component="span" name="senha"/>
                        </div>

                        <button type="submit">Login</button> 
                    </Form>
                </Formik>
            </div>
    )
}