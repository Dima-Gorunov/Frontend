import React from 'react';
import {addNotesThunk, sortNodes} from "../Redux/Reducers/AppReducer";
import NotesContainer from "./NotesContainer";

const Test: React.FC = ({InputValue, addNotesThunk, sortNodes, changeInput, DefText, Notes, deleteNoteThunk}: any) => {
    let change = (e: any) => changeInput(`${e.currentTarget.value}`)

    return (
        <div>
            <div>
                {DefText}
            </div>
            <div>
                <input type="text" value={InputValue} onChange={change}/>
            </div>
            <div>
                <button onClick={() => {
                    addNotesThunk()
                    console.log(Notes);
                }}>Создать
                </button>
            </div>
            <div>
                <NotesContainer/>
            </div>
            <div>
                <button onClick={() => sortNodes()}>Сортировать</button>
            </div>
        </div>
    );
};

export default Test;