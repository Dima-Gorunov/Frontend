import {Component} from "react";
import MyProfile from "./MyProfile";
import {connect} from "react-redux";


class MyProfileContainer extends Component{
    render() {
        return (
            <MyProfile/>
        );
    }
}

let mapStateToProps=(state)=>{
    return{

    }
}

export default connect(mapStateToProps,{

})(MyProfileContainer)