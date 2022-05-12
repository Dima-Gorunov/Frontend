import React from 'react';
import { connect } from 'react-redux';
import UserList from "./UserList";


const UserListContainer: React.FC = () => {
    return (
        <UserList/>
    );
};
let mapStateToProps=(state: any)=>{
        User:state.User.
}

export default connect()(UserListContainer);