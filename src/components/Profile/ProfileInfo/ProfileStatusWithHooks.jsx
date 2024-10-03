import { useState } from "react";

const ProfileStatusWithHooks = (props) => {
    let [editMode, setEditMode] = useState(false);
    let [status, setStatus] = useState(props.status);

    const activateMode = () => {
        setEditMode(true);
    }

    const deactivateEditMode = () => {
        setEditMode(false);
        props.updateStatus(status);
    };

    const onStatusChange = (e) => {
        setStatus(e.currentTarget.value);
    };


    return (
        <div className="profile-status-wrapper">
            {!editMode &&
                <div className="profile-status">
                    <span onDoubleClick={activateMode}>{status || '----'}</span>
                </div>
            }
            {editMode &&
                <div className="input-status-wrapper">
                    <input onChange={onStatusChange} autoFocus={true} type="text" name="status" value={status} onBlur={deactivateEditMode} />
                </div>
            }
        </div>
    );
};

export default ProfileStatusWithHooks;
