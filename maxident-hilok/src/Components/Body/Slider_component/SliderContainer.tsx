import React from 'react';
import {compose} from "redux";
import {connect} from "react-redux";
import Slider from "./Slider";

const SliderContainer = (props: any) => {
    return (
        <Slider {...props} />
    );
};

let mapStateToProps = (state: any) => {
    return {}
}

export default compose(
    connect(mapStateToProps, {})
)(SliderContainer);