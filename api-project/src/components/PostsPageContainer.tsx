import React, {useEffect} from 'react';
import {compose} from "redux";
import {connect} from "react-redux";
import PostsPage from "./PostsPage";
import {getOnePostThunk, getPostsThunk} from "../Reducers/PostsReducer";
import {getLoad} from "../Selectors/AppSelector";
import Preloader from "./Preloader";
import {useParams} from "react-router-dom";
import {getOnePostsSel, getPostsSel} from "../Selectors/PostsSelector";

const PostsPageContainer = ({...props}: any) => {

    let UserId = useParams().UserId
    let PostId = useParams().PostId

    useEffect(() => {
        props.getOnePostThunk(UserId, PostId)
    }, [])

    return props.Loading || !props.OnePost ? <Preloader/> : <PostsPage {...props} />
};

let mapStateToProps = (state: any) => {
    return {
        Posts: getPostsSel(state),
        Loading: getLoad(state),
        OnePost: getOnePostsSel(state)
    }
}

export default compose(
    connect(mapStateToProps, {
        getPostsThunk,
        getOnePostThunk
    }),
)(PostsPageContainer);