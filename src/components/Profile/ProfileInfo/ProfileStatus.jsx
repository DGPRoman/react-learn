import React from "react";

class ProfileStatus extends React.Component {
    state = {
        editMode: false
    };

    activetaEditMode = () => {
        this.setState({
            editMode: true
        });
    };

    deactivetaEditMode = () => {
        this.setState({
            editMode: false
        });
    };

    render() {
        return (
            <div className="profile-status-wrapper">
                {this.state.editMode &&
                    <div className="input-status-wrapper">
                        <input  autoFocus={true} type="text" name="status" value={this.props.status} onBlur={this.deactivetaEditMode} />
                    </div>
                }
                {!this.state.editMode &&
                    <div className="profile-status" onDoubleClick={this.activetaEditMode}>
                        <span>{this.props.status}</span>
                    </div>
                }
            </div>
        );
    };
}

export default ProfileStatus;
