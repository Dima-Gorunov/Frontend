import React, {useEffect} from 'react';
import {compose} from "redux";
import {connect} from "react-redux";
import Posts from "./Posts";
import WithPreloader from "../HOCs/WithPreloader";
import {getPostsThunk} from "../Reducers/PostsReducer";
import {getLoad} from "../Selectors/AppSelector";
import Preloader from "./Preloader";

const PostsContainer = ({...props}: any) => {
    useEffect(() => {
        props.getPostsThunk()
    }, [])


    return props.Loading ? <Preloader/> : <Posts {...props} />

};


let mapStateToProps = (state: any) => {
    return {
        Posts: state.Posts.Posts,
        Loading: getLoad(state)
    }
}


export default compose(
    connect(mapStateToProps, {
        getPostsThunk
    }),
)(PostsContainer);