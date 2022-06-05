import React from 'react';
import {compose} from "redux";
import {connect} from "react-redux";
import Homepage from "./Homepage";

const HomepageContainer = () => {
    return (
        <Homepage/>
    );
};

let mapStateToProps = (state: any) => {
    return {}
}

export default compose(
    connect(mapStateToProps, {})
)(HomepageContainer);