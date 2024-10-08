import React from 'react';
import Profile from './Profile';
import { connect } from 'react-redux';
import { getUserProfile, getStatus, updateStatus } from '../../redux/profile-reducer';
import { useParams } from 'react-router-dom';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { compose } from 'redux';

class ProfileContainer extends React.Component {
  componentDidMount() {
    let userId = this.props.params.userId;

    if (!userId) {
      userId = this.props.autorizedUserId;
    }

    this.props.getUserProfile(userId);
    this.props.getStatus(userId);
  }

  render() {
    return <Profile {...this.props} profile={this.props.profile} 
    status={this.props.status} updateStatus={this.props.updateStatus} />
  }
}

const ProfileContainerWithRouter = (props) => {
  const params = useParams();
  return <ProfileContainer {...props} params={params} />;
};

let mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
  status: state.profilePage.status,
  autorizedUserId: state.auth.userId,
  isAuth: state.auth.isAuth
});

export default compose(
  withAuthRedirect,
  connect(mapStateToProps, { getUserProfile, getStatus, updateStatus })  
)(ProfileContainerWithRouter);
