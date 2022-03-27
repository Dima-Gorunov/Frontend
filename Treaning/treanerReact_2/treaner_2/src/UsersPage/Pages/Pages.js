import React, {useMemo} from 'react';
import style from "../Page.module.css";

const Pages = (props) => {

    return (
        props.Pages.map((e, index) => (
            <span className={props.CurrentPage === e ? style.active : null} key={`Page${index}`}
                  onClick={() => {
                      props.onPageChanged(e)
                  }}>{e} </span>
        ))
    );
};

export default Pages;