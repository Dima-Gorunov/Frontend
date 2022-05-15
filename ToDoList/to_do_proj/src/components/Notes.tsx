import React from 'react';

const Notes = ({Notes, deleteNoteThunk}: any) => {
    return (
        <div>
            {
                Notes ?
                    Notes.map((e: any, index: number) => (
                            <div>
                                    <span>
                                        {`id:${e.Id}_${e.Text}`}
                                    </span>
                                <span onClick={() => deleteNoteThunk(e.Id)}>Done</span>
                            </div>

                        )
                    )
                    : <div>
                        Пусто
                    </div>
            }
        </div>
    );
};

export default Notes;