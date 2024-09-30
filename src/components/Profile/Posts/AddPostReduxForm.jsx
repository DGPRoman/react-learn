import { Field, reduxForm } from "redux-form";
import { requiredField, maxLengthCreator } from '../../../utils/validators/validators';
import { Textarea } from "../../common/FormControls/FormControls";

const maxLength10 = maxLengthCreator(10);

const PostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div className="field required">
                <div className="control">
                    <Field component={Textarea} name="post_text"
                     validate={[requiredField, maxLength10]}
                     placeholder="Enter your post"></Field>
                </div>
            </div>
            <div className='actions-toolbar'>
                <div className="primary">
                    <button>Add post</button>
                </div>
            </div>
        </form>
    )
}

let PostReduxForm = reduxForm({ form: "post-form" })(PostForm);

export default PostReduxForm;