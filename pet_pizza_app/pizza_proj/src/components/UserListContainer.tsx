import React from 'react';
import {connect} from 'react-redux';
import {UsersState} from '../ReduxStore/Reducers/UserReducer';
import UserList from "./UserList";


const UserListContainer: React.FC = ({ ...props}:any) => {
    return (
        <UserList { ...props} />
    );
};
let mapStateToProps = (state: any) => {
    return {
        Users: state.User.Users
    }
}

export default connect(mapStateToProps, {})(UserListContainer);