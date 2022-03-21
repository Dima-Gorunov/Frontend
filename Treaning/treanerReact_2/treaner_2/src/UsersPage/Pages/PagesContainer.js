import React from 'react';
import Pages from "./Pages";
import {connect} from "react-redux";
import {getUsers} from "../../Api/Api";
import {getUsersThunk, setCurrentPage, setPagesCount, setUsers, toggleStatus} from "../../Reducers/UsersReducer";


const PagesContainer = (props) => {
    let onPageChanged = (pageNumber) => {
        props.getUsersThunk(pageNumber, props.PageSize);
    }

    return (
        <Pages {...props} onPageChanged={onPageChanged}/>
    )
};

let mapStateToProps = (state) => {
    return {
        CurrentPage: state.UsersPage.CurrentPage,
        PageSize: state.UsersPage.PageSize,
        Pages: state.UsersPage.Pages,
    }
}
export default connect(mapStateToProps, {
    getUsersThunk
})(PagesContainer)