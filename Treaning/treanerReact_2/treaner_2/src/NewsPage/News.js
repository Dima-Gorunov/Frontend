import {Component} from "react";


let News = (props) => {
    let change = (e) => {
        props.changeInput(e.currentTarget.value)
    }
    return (
        <div>
            <div>
                {
                    props.News.map((e, index) => (
                        <div key={`News${index}`}>
                            <div>
                                {e.name}:
                            </div>
                            <div>
                                {e.post}
                            </div>
                        </div>
                    ))
                }
            </div>
            <div>
                <input value={props.InputText} onChange={change} type="text"/>
            </div>
        </div>
    );

}

export default News;