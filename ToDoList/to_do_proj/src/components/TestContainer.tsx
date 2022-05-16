import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import Test from "./Test";
import {
    addNotes,
    addNotesThunk,
    changeInput,
    checkDuplicate,
    deleteNoteThunk,
    sortNodes
} from "../Redux/Reducers/AppReducer";


const TestContainer = (props:any) => {
    useEffect(() => {
    }, [])
    return (
        <Test {...props} />
    );
};

let mapStateToProps = (state: any) => {
    return {
        DefText: state.App.DefText,
        InputValue: state.App.InputValue,
        Notes: state.App.Notes,
        IdArray: state.App.IdArray,
        Duplicate: state.App.Duplicate,
        DuplicateArray: state.App.DuplicateArray,
        TextArray:state.App.TextArray
    }
}

export default connect(mapStateToProps, {
    changeInput,
    addNotesThunk,
    deleteNoteThunk,
    sortNodes,
    checkDuplicate
})(TestContainer);