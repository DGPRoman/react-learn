import React from 'react';
import Profile from './Profile';
import { connect } from 'react-redux';
import { getUserProfile } from '../../redux/profile-reducer';
import { useParams } from 'react-router-dom';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { compose } from 'redux';

class ProfileContainer extends React.Component {

  componentDidMount() {
    let userId = this.props.params.userId;

    if (!userId) {
      userId = 3;
    }

    this.props.getUserProfile(userId);
  }

  render() {
    return <Profile {...this.props} profile={this.props.profile} />
  }
}

const ProfileContainerWithRouter = (props) => {
  const params = useParams();
  return <ProfileContainer {...props} params={params} />;
};

let mapStateToProps = (state) => ({
  profile: state.profilePage.profile
});

export default compose(
  withAuthRedirect,
  connect(mapStateToProps, { getUserProfile })  
)(ProfileContainerWithRouter);
