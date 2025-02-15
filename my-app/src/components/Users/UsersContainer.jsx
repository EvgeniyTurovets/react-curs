import React from 'react';
import {connect} from 'react-redux';
import {
    follow,
    setCurrentPage,
    unfollow,
    toggleIsFollowingProgress,
    getUsers
} from '../../redux/users-reducer';
import * as axios from 'axios';
import Users from './Users';
import Preloader from "../common/Preloader/Preloader";
import { usersApi } from '../../api/api';


class UsersContainer extends React.Component {
    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize)
        // this.props.toggleIsFetching(true);

        // usersApi.getUsers(this.props.currentPage, this.props.pageSize).then(response => {
        //         this.props.toggleIsFetching(false);
        //         this.props.setUsers(response.items);
        //         this.props.setTotalUsersCount(response.totalCount);
        //     });
    }

    onPageChanged = (pageNumber) => {
        this.props.getUsers(pageNumber, this.props.pageSize)

        this.props.setCurrentPage(pageNumber);
        // this.props.toggleIsFetching(true);
       
        // usersApi.getUsers(this.props.currentPage, this.props.pageSize).then(response => {
        //         this.props.toggleIsFetching(false);
        //         this.props.setUsers(response.items);
        //     });
    }

    render() {
        return <>
            { this.props.isFetching ? <Preloader /> : null }
            <Users totalUsersCount={this.props.totalUsersCount}
                        pageSize={this.props.pageSize}
                        currentPage={this.props.currentPage}
                        onPageChanged={this.onPageChanged}
                        users={this.props.users}
                        follow={this.props.follow}
                        unfollow={this.props.unfollow}
                        toggleIsFollowingProgress={this.props.toggleIsFollowingProgress}
                        followingIsProgress={this.props.followingIsProgress}
             />
        </>
    }
}

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingIsProgress: state.usersPage.followingIsProgress
    }
}

export default connect(mapStateToProps,
    {follow, unfollow, setCurrentPage, toggleIsFollowingProgress, getUsers: getUsers})(UsersContainer);