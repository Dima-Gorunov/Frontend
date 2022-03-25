import React from 'react';
import {connect} from "react-redux";
import {compose} from "redux";
import {Field, Form, Formik} from "formik";
import {maxLength} from "../Utils/Validators";

const Login = (props) => {

    const submit = (value) => {

        console.log(value);

    }
    const maxLength10=maxLength(10)
    return (<div className="App">
        <h1>Contact Us</h1>
        <Formik
            initialValues={{name: "", email: ""}}
            onSubmit={submit}
            validate={[maxLength10]}
        >
            <Form>
                <Field name="name" type="text"/>
                <Field name="email" type="email"/>
                <button type="text">Submit</button>
                <button>Submit test</button>
            </Form>
        </Formik>
    </div>);
};

let mapStateToProps = (state) => {
    return {}
}

export default compose(
    connect(mapStateToProps, {})
)(Login);