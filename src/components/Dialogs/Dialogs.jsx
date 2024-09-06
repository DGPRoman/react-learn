import styles from './Dialogs.module.css';
import Dialog from './Dialog/Dialog';
import Message from './Message/Message';


const Dialogs = (props) => {
    let dialogElements = props.state.dialogs.map((dialog) => <Dialog key={dialog.id} id={dialog.id} name={dialog.name} />);
    let messages = props.state.messages.map(message => <Message key={message.id} message={message.message} />)

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
            </div>
        </div>
    );
}

export default Dialogs;
