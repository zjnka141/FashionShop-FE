import React from 'react';
import { makeStyles } from '@material-ui/core';
import PropTypes from 'prop-types';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'inline-block',
    position: 'relative',
    minWidth: 100,
    height: 40,
    padding: '5px 20px',
    textTransform: 'uppercase',
    lineHeight: '40px',
    textAlign: 'center',
    background: 'transparent',
    border: (props) => `1px solid ${theme.palette[props.color].main}`,
    cursor: 'pointer',
    color: 'white',
    zIndex: 1,
    overflow: 'hidden',
    transition: '0.3s',
    '&:after, &:before': {
      content: '""',
      position: 'absolute',
      width: '51%',
      height: '100%',
      background: (props) => theme.palette[props.color].main,
      top: 0,
      zIndex: -1,
      transition: '0.3s',
    },
    '&:before': {
      left: 0,
    },
    '&:after': {
      right: 0,
    },
    '&:hover': {
      color: (props) => theme.palette[props.color].main,
      '&:before': {
        transform: 'translateX(-100%)',
      },
      '&:after': {
        transform: 'translateX(101%)',
      },
    },
  },
}));

const SpreadButton = (props) => {
  const { children } = props;
  const classes = useStyles(props);
  return <div className={classes.root}>{children}</div>;
};

SpreadButton.propTypes = {
  color: PropTypes.string,
};

SpreadButton.defaultProps = {
  color: 'primary',
};

export default SpreadButton;
