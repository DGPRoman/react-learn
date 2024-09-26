import { Field, reduxForm } from "redux-form";

const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div><Field name={"text"} placeholder={"login"} component={"input"} /></div>
            <div><Field name={"password"} placeholder={"password"} component={"input"}/></div>
            <div><Field type="checkbox" component={"input"} name={"rememberMe"} />remember me</div>
            <div><button>Login</button></div>
        </form>
    )
}

const LoginReduxForm = reduxForm({
    form: 'login'
})(LoginForm);

export default LoginReduxForm;
