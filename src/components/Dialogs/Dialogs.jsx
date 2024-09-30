import styles from './Dialogs.module.css';
import Dialog from './Dialog/Dialog';
import Message from './Message/Message';
import AddMessageFormRedux from './Message/AddMessageForm';


const Dialogs = (props) => {
    let state = props.dialogsPage;

    let dialogElements = state.dialogs.map((dialog) => <Dialog key={dialog.id} id={dialog.id} name={dialog.name} />);
    let messages = state.messages.map(message => <Message key={message.id} message={message.message} />)
   
    let addNewMessage = (values) => {
        console.log(values);
        props.sendMessage(values.newMessageBody);
    }
    
    return (
        <div className={styles.wrapper}>
            <div className={styles.left}>
                <div className={styles.title}>Dialogs</div>
                <div className={styles.dialogs_list}>
                    {dialogElements}
                </div>
            </div>
            <div className={styles.right}>messages
                <div className={styles.messages}>
                    {messages}
                </div>
                <AddMessageFormRedux onSubmit={addNewMessage} />
            </div>
        </div>
    );
}

export default Dialogs;
