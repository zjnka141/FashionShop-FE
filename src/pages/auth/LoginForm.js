/* eslint-disable jsx-a11y/anchor-has-content */
import React from 'react';
import classnames from 'classnames';
import './style.css';
import { Formik, Field } from 'formik';
import * as Yup from 'yup';
import { Typography } from '@material-ui/core';
import axios from 'axios';
import TextInputField from '../../components/common/TextInputField';

const SignupSchema = Yup.object().shape({
  username: Yup.string()
    .min(3, 'Tên đăng nhập tối thiểu 3 ký tự')
    .max(50, 'Tên đăng nhập tối đa 50 ký tự')
    .required('Vui lòng nhập trường này!'),
  password: Yup.string()
    .min(6, 'Mật khẩu tối thiểu 6 ký tự')
    .max(50, 'Mật khẩu tối đa 50 ký tự')
    .required('Vui lòng nhập trường này!'),
});
export const LoginForm = (props) => {
  return (
    <Formik
      initialValues={{ username: '' }}
      validationSchema={SignupSchema}
      onSubmit={(values) => {
        // same shape as initial values
        axios
          .post('http://localhost:8080/auth/login', values)
          .then((res) => console.log('RES', res))
          .catch((err) => console.log('err', err));
      }}
    >
      {(props) => {
        const {
          values,
          touched,
          errors,
          handleChange,
          handleBlur,
          handleSubmit,
        } = props;
        console.log('FFFF', props);
        return (
          <form className="form-login" onSubmit={handleSubmit}>
            <div
              className={classnames('form-field', {
                error: errors.username && touched.username,
              })}
            >
              <input
                type="text"
                placeholder="UserName"
                name="username"
                onChange={handleChange}
                value={values.username}
                onBlur={handleBlur}
              />
              {errors.username && touched.username && (
                <Typography variant="subtitle2">{errors.username}</Typography>
              )}
            </div>
            <Field name="password" component={TextInputField} type="password" placeholder="Password" />
            <div className="remember-box">
              <input type="checkbox" id="remember-password" />
              <label for="remember-password">Remember me?</label>
            </div>
            <button type="submit">Login</button>
          </form>
        );
      }}
    </Formik>
  );
};