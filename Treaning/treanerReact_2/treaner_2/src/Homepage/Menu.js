import {Component} from "react";
import {changeInput} from "../Reducers/HomePageReducer";
import MyCustomLink from "../MyCustomElement/MyCustomLink";


const Menu = (props) => {

    return (
        <div>
            <div>
                {
                    props.Menu.map((e, index) => (

                    <div key={`menu${index}`}>
                        <MyCustomLink to={e.link}>{e.name}</MyCustomLink>
                    </div>
                ))}

            </div>
        </div>
    );
}

export default Menu;