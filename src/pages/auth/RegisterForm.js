/* eslint-disable jsx-a11y/anchor-has-content */
import React from 'react';
import classnames from 'classnames';
import './style.css';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { Typography } from '@material-ui/core';
import axios from 'axios';
import TextInputField from '../../components/common/TextInputField';

const RegisterSchema = Yup.object().shape({
  username: Yup.string()
    .min(3, 'Tên đăng nhập tối thiểu 3 ký tự')
    .max(50, 'Tên đăng nhập tối đa 50 ký tự')
    .required('Vui lòng nhập trường này!'),
  email: Yup.string().email('Chưa đúng định dạng email').required('Vui lòng nhập trường này!'),
  password: Yup.string()
    .min(6, 'Mật khẩu tối thiểu 6 ký tự')
    .max(50, 'Mật khẩu tối đa 50 ký tự')
    .required('Vui lòng nhập trường này!'),
  passwordConfirm: Yup.string()
    .required('Vui lòng nhập trường này!')
    .oneOf([Yup.ref('password'), null], 'Mật khẩu chưa trùng khớp'),
});
export const RegisterForm = (props) => {
  return (
    <Formik
      initialValues={{ username: '' }}
      validationSchema={RegisterSchema}
      onSubmit={(values) => {
        // same shape as initial values
        console.log('VALUES', values);
        axios
          .post('http://localhost:8080/auth/register', values)
          .then((res) => console.log('RES', res))
          .catch((err) => console.log('err', err));
      }}
    >
      {(props) => {
        return (
          <Form className="form-login">
            <Field
              name="username"
              component={TextInputField}
              type="text"
              placeholder="UserName"
            />
            <Field
              name="email"
              component={TextInputField}
              type="text"
              placeholder="Email"
            />
            <Field
              name="password"
              component={TextInputField}
              type="password"
              placeholder="Password"
            />
            <Field
              name="passwordConfirm"
              component={TextInputField}
              type="password"
              placeholder="Re-Password"
            />
            <button type="submit">Register</button>
          </Form>
        );
      }}
    </Formik>
  );
};
