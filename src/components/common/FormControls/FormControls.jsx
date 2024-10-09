import './form_control.css';

export const FormControl = ({ input, meta: {touched, error}, children }) => {
    const hasError = touched && error;
    return (
        <div className={'form-control ' + (hasError ? 'error' : '')}>
            <div>
                { children }
            </div>
            {hasError && <span>{error}</span>}
        </div>
    )
}

export const Textarea = (props) => {
    const {input, meta, ...restProps} = props;
    return <FormControl {...props}><textarea {...input} {...restProps}></textarea></FormControl>
}

export const Input = (props) => {
    const {input, meta, ...restProps} = props;
    return <FormControl {...props}><input {...input} {...restProps} /></FormControl>
}
