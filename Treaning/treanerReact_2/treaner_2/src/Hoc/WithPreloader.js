import Preloader from "../Common/Preloader";
import {connect} from "react-redux";

const WithPreloaderUsers = (Component) => {


    const ComponentWithPreloader = (props) => {

        return <Preloader/>
        return <Component {...props}/>
    }

    let mapStateToPropsForPreloader = (state) => {
        return {
            Loading: state.UsersPage.Loading
        }
    }

    return connect(mapStateToPropsForPreloader)(ComponentWithPreloader)
}
export default WithPreloaderUsers