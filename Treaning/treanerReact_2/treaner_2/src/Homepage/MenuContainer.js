import {Component} from "react";
import {connect} from "react-redux";
import Menu from "./Menu";
import {addMenuElement, changeInput} from "../Reducers/HomePageReducer";


let mapStateToProps=(state)=>{
    return{
        InputText:state.HomePage.InputText,
        Menu:state.HomePage.Menu
    }
}
let mapDispatchToProps=(dispatch)=>{
    return{
        changeInput:(text)=>{
            dispatch(changeInput(text))
        },
        addMenuElement:()=>{
            dispatch(addMenuElement());
        }
    }
}


let MenuContainer=connect(mapStateToProps, mapDispatchToProps)(Menu);
export default MenuContainer;