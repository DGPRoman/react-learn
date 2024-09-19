import React from 'react';
import Profile from './Profile';
import axios from 'axios';
import API_URL from '../../api';
import { connect } from 'react-redux';
import { setUserProfile } from '../../redux/profile-reducer';
import { useParams } from 'react-router-dom';

class ProfileContainer extends React.Component {
  
  componentDidMount() {
    let userId = this.props.params.userId;
    
    if (!userId) {
      userId = 3;
    }

    axios.get(`${API_URL}/profile/${userId}`).then(response => {
      this.props.setUserProfile(response.data);
    });
  }

  render() {
    return (
      <Profile {...this.props} profile={this.props.profile} />
    );
  }
}

let mapStateToProps = (state) => ({
  profile: state.profilePage.profile
});

const ProfileContainerWithRouter = (props) => {
  const params = useParams();
  return <ProfileContainer {...props} params={params} />;
};

export default connect(mapStateToProps, { setUserProfile })(ProfileContainerWithRouter);
