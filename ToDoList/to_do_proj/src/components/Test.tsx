import React, {useState} from 'react';
import NotesContainer from "./NotesContainer";

const Test: React.FC = ({InputValue, addNotesThunk, sortNodes, changeInput, DefText, checkDuplicate, Duplicate}: any) => {
    let change = (e: any) => {
        changeInput(`${e.currentTarget.value}`)
        checkDuplicate()
        e.currentTarget.value ? setDirty(false) : setDirty(true)
    }
    let addNodes = (e: any) => {
        e.preventDefault()
        if (InputValue) {
            addNotesThunk()
            setDirty(false)
        } else {
            setDirty(true)
        }
    }
    let [Dirty, setDirty] = useState(false);
    return (
        <div className="main-block">
            <form action="">
                <div className="error-message" >
                    {Dirty && "Поле не может быть пустым"}
                    {Duplicate && "Заметка существует"}
                </div>
                <div className="form__group field">
                    <input type="input" value={InputValue} onChange={change} className="form__field" placeholder="Name"
                           name="name" id='name' autoComplete="off"
                           maxLength={44} required/>
                    <label htmlFor="name" className="form__label">Заметка</label>
                </div>
                <div>
                    <button className="note_button" onClick={(e) => {
                        addNodes(e)
                    }}
                            disabled={Duplicate}
                    >Создать
                    </button>
                </div>
            </form>
            <NotesContainer/>
        </div>
    );
};

export default Test;