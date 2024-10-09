import { Field, reduxForm } from "redux-form";
import { Input } from "../common/FormControls/FormControls";
import { requiredField } from "../../utils/validators/validators";

const LoginForm = ({handleSubmit, error}) => {
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <Field name={"email"} placeholder={"email"} component={Input}
                    validate={[requiredField]}
                />
            </div>
            <div>
                <Field name={"password"} placeholder={"password"} component={Input} type="password"
                    validate={[requiredField]}
                />
            </div>
            <div>
                <Field type="checkbox" component={Input} name={"rememberMe"} />
                Remember me
            </div>
            <div className="errors-wrapper">
                {error && <div className="form-global-error">{error}</div>}
            </div>
            <div>
                <button>Login</button>
            </div>
        </form>
    )
}

const LoginReduxForm = reduxForm({
    form: 'login'
})(LoginForm);

export default LoginReduxForm;
