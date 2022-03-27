import {Component} from "react";
import {connect} from "react-redux";
import Menu from "./Menu";


const MenuContainer = (props) => {
    return (
        <Menu {...props} />
    )
}

let mapStateToProps = (state) => {
    return {
        InputText: state.HomePage.InputText,
        Menu: state.HomePage.Menu
    }
}


export default connect(mapStateToProps,{})(MenuContainer);