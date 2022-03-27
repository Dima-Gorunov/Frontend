import React from 'react';
import {connect} from "react-redux";
import {compose} from "redux";
import {Field, Form, Formik} from "formik";
import {maxLength} from "../Utils/Validators";
import {loginThunk} from "../Reducers/AuthReducer";

const LoginForm = (props) => {

    const submit = (value) => {
        console.log(value);
        props.loginThunk(value.email, value.password)
    }

    return (
        <div className="App">
            <Formik
                initialValues={{email: "", password: ""}}
                onSubmit={submit}
            >
                <Form>
                    <Field name="email" type="email" placeholder="email"/><br/>
                    <Field name="password" type="password" placeholder="password"/><br/>
                    <button type="submit">Submit test</button>
                </Form>
            </Formik>
        </div>
    );
};

let mapStateToProps = (state) => {
    return {}
}


export default connect(mapStateToProps, {
    loginThunk
})(LoginForm)

