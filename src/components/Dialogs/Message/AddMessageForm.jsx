import { Field, reduxForm } from "redux-form";
import { Textarea } from '../../common/FormControls/FormControls';
import { requiredField, maxLengthCreator } from '../../../utils/validators/validators';

const maxLength100 = maxLengthCreator(100);

const AddMessageForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={Textarea} name="newMessageBody"
                    placeholder="Enter your message"
                    validate={[requiredField, maxLength100]}
                />
            </div>
            <div>
                <button>Send</button>
            </div>
        </form>
    );
}

const AddMessageFormRedux = reduxForm({ form: "dialogAddMessageForm" })(AddMessageForm);

export default AddMessageFormRedux;
