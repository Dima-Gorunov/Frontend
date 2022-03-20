import {Component} from "react";


class News extends Component {

    render() {
        let change = (e) => {
            this.props.ChangeInput(e.currentTarget.value)
        }
        return (
            <div>
                <div>
                    {
                        this.props.News.map((e, index) => (
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
                    <input value={this.props.InputText} onChange={change} type="text"/>
                </div>
            </div>
        );
    }
}

export default News;