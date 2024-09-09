import styles from './Dialogs.module.css';
import Dialog from './Dialog/Dialog';
import Message from './Message/Message';


const Dialogs = (props) => {
    let state = props.dialogsPage;

    let dialogElements = state.dialogs.map((dialog) => <Dialog key={dialog.id} id={dialog.id} name={dialog.name} />);
    let messages = state.messages.map(message => <Message key={message.id} message={message.message} />)
    let newMessageBody = state.newMessageBody;

    let onSendMessageClick = () => {
        props.sendMessage();
    }

    let onNewMessageChange = (e) => {
        let body = e.target.value;

        props.updateNewMessageBody(body);
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
                <div>
                    <div>
                        <textarea value={newMessageBody}
                            onChange={onNewMessageChange}
                            placeholder='Enter your message'></textarea>
                    </div>
                    <div>
                        <button onClick={onSendMessageClick}>Send</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Dialogs;
