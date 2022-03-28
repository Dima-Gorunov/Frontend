import {createSelector} from "reselect";
import {filterUsers} from "../Reducers/UsersReducer"
export const getUsersSel = (state) => state.UsersPage.Users



export const getCurrentPageSel = (state) => state.UsersPage.CurrentPage

export const getPageSizeSel = (state) => state.UsersPage.PageSize

export const getLoadingProcess = (state) => state.UsersPage.Loading

export const getFollowProgress = (state) => state.UsersPage.followingInProgress


///
//

