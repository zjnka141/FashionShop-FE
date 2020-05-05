import React from 'react';
import classnames from 'classnames';
import { Typography } from '@material-ui/core';

const TextInputField = ({field, form, ...props}) => {
  const { touched, errors } = form;
  return (
    <div
      className={classnames('form-field', {
        error: errors[field.name] && touched[field.name],
      })}
    >
      <input
        type={props.type || "text"}
        placeholder={props.placeholder || field.name}
        {...field}
        {...props}
      />
      {errors[field.name] && touched[field.name] && (
        <Typography variant="subtitle2">{errors[field.name]}</Typography>
      )}
    </div>
  );
};

export default TextInputField;
