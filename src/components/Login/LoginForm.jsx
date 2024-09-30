import { Field, reduxForm } from "redux-form";
import { Input } from "../common/FormControls/FormControls";
import { requiredField } from "../../utils/validators/validators";

const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field name={"text"} placeholder={"login"} component={Input}
                    validate={[requiredField]}
                />
            </div>
            <div>
                <Field name={"password"} placeholder={"password"} component={Input}
                    validate={[requiredField]}
                />
            </div>
            <div>
                <Field type="checkbox" component={Input} name={"rememberMe"} />
                remember me
            </div>
            <div><button>Login</button></div>
        </form>
    )
}

const LoginReduxForm = reduxForm({
    form: 'login'
})(LoginForm);

export default LoginReduxForm;
