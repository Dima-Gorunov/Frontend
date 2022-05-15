import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import Test from "./Test";
import {addNotes, addNotesThunk, changeInput, deleteNoteThunk, sortNodes} from "../Redux/Reducers/AppReducer";


const TestContainer: React.FC = (props) => {
    useEffect(()=>{
    },[])
    return (
        <Test {...props} />
    );
};

let mapStateToProps = (state: any) => {
    return {
        DefText: state.App.DefText,
        InputValue: state.App.InputValue,
        Notes:state.App.Notes,
        IdArray: state.App.IdArray
    }
}

export default connect(mapStateToProps, {
    changeInput,
    addNotesThunk,
    deleteNoteThunk,
    sortNodes
})(TestContainer);