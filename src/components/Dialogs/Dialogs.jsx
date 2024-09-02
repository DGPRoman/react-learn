import styles from './Dialogs.module.css';
import Dialog from './Dialog/Dialog';
import Message from './Message/Message';


const Dialogs = () => {
    let dialogsData = [
        {id: 1, name: 'Roman'},
        {id: 2, name: 'Yurii'},
        {id: 1, name: 'Olga'},
        {id: 1, name: 'USer 22'},
    ];

    let dialogElements = dialogsData.map(dialog => <Dialog id={dialog.id} name={dialog.name} />);

    let messagesData = [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'MEssage'},
        {id: 3, message: 'lorem dsfdsf'},
    ];

    let messages = messagesData.map(message => <Message message={message.message} />)
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
