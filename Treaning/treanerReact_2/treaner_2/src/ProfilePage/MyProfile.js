import React, {useState} from 'react';

const MyProfile = (props) => {
    const [active, setActive] = useState(false)
    const [text, setText] = useState("Эпривет ")
    const change = (e) => {
        setText(e.currentTarget.value)
    }
    return (
        <div>
            <div>
                {
                    !active && <span onClick={() => setActive(true)}>{text}</span>
                }
                {
                    active &&
                    <input onBlur={() => setActive(false)}
                           autoFocus={true}
                           onChange={(e) => change(e)}
                           value={text}/>
                }
            </div>
        </div>
    );
};

export default MyProfile;
