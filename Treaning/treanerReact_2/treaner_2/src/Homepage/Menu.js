import {Component} from "react";
import {changeInput} from "../Reducers/HomePageReducer";
import MyCustomLink from "../MyCustomElement/MyCustomLink";


class Menu extends Component {
    render() {
        let change = (e) => {
            this.props.changeInput(e.currentTarget.value);
        }
        let add = () => {
            this.props.addMenuElement();
        }
        return (
            <div>
                <div>
                    {this.props.Menu.map((e, index) => (
                        <div key={`menu${index}`}>
                            <MyCustomLink to={e.link}>{e.name}</MyCustomLink>
                        </div>
                    ))}

                </div>
                <button onClick={add}>Добавить пункт</button>
                <input onChange={change} type="text" value={this.props.InputText}/>
            </div>
        );
    }
}

export default Menu;