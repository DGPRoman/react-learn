import React from 'react';
import Users from './Users';
import { connect } from 'react-redux';
import { follow, unfollow, setCurrentPage, toggleFollowInProgress, requestUsers } from '../../redux/users-reducer';
import Preloader from '../common/Preloader/Preloader';
import { compose } from 'redux';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { getPageSize, getUsers, getTotalUsersCount, getCurrentPage, getFollowInProgress, getIsFetching } from '../../redux/users-selectors';


class UsersContainer extends React.Component {
    componentDidMount() {
        const {currentPage, pageSize} = this.props;
        this.props.requestUsers(currentPage, pageSize);
    }

    onPageChanged = (p) => {
        const {pageSize} = this.props;
        this.props.requestUsers(p, pageSize);
    }

    render() {
        return (
            <>
                {this.props.isFetching ? <Preloader /> : null}
                <Users totalUsersCount={this.props.totalUsersCount}
                    pageSize={this.props.pageSize}
                    currentPage={this.props.currentPage}
                    users={this.props.users}
                    onPageChanged={this.onPageChanged}
                    follow={this.props.follow}
                    unfollow={this.props.unfollow}
                    followInProgress={this.props.followInProgress}
                />
            </>
        )
    }
}

let mapStateToProps = (state) => {
    return {
        users: getUsers(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followInProgress: getFollowInProgress(state)
    }
}

export default compose(
    withAuthRedirect,
    connect(mapStateToProps, {
        follow, unfollow, setCurrentPage,
        toggleFollowInProgress, requestUsers
    })
)(UsersContainer);
