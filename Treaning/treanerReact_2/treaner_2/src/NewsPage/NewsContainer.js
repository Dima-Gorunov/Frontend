import {connect} from "react-redux";
import News from "./News";
import {changeInput} from "../Reducers/NewsPageReducer";


let mapStateToProps = (state) => {
    return {
        InputText: state.NewsPage.InputText,
        News:state.NewsPage.News
    }
}


let mapDispatchToProps = (dispatch) => {
    return {
        ChangeInput: (text) => {
            dispatch(changeInput(text));
        }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(News);
