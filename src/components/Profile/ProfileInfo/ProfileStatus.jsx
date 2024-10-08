import React from "react";

class ProfileStatus extends React.Component {
    state = {
        editMode: false,
        status: this.props.status
    };

    activateEditMode = () => {
        this.setState({
            editMode: true
        });
    };

    deactivateEditMode = () => {
        this.setState({
            editMode: false
        });
        this.props.updateStatus(this.state.status);
    };

    onStatusChange = (e) => {
        this.setState({
            status: e.currentTarget.value
        });
    };

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.status !== this.props.status) {
            this.setState({
                status: this.props.status
            });
        }
    }

    render() {
        return (
            <div className="profile-status-wrapper">
                {this.state.editMode &&
                    <div className="input-status-wrapper">
                        <input onChange={this.onStatusChange} autoFocus={true} type="text" name="status" value={this.state.status} onBlur={this.deactivateEditMode} />
                    </div>
                }
                {!this.state.editMode &&
                    <div className="profile-status" onDoubleClick={this.activateEditMode}>
                        <span>{this.props.status || '----'}</span>
                    </div>
                }
            </div>
        );
    };
}

export default ProfileStatus;
