import React from 'react';
import {Field, Formik} from "formik";

const Form = () => {
    return (
        <Formik
            validateOnChange={true}
            initialValues={{
                email: ''
            }}
            onSubmit={onSubmit}
        >
            <Form>
                <Field type="email" name="email"/>
                <button type="submit">оставить заявку</button>
            </Form>
        </Formik>
    );
};

export default Form;