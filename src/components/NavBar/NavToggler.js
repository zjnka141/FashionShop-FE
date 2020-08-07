import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import classnames from 'classnames';
import { useDispatch, useSelector } from 'react-redux';
import * as types from '../../store/actions';

const useStyles = makeStyles({
  navToggler: {
    backgroundColor: 'transparent',
    width: '36px',
    height: '24px',
    position: 'absolute',
    top: '32px',
    right: '32px',
    zIndex: 100,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    '-webkit-tap-highlight-color': 'transparent',
    cursor: 'pointer',
    '& div': {
      width: '100%',
      height: '3px',
      backgroundColor: '#444242',
      transition: 'transform 0.5s, opacity 0.2s',
    },
  },
  expand: {
    '& div:nth-child(1)': {
      transform: 'rotate(45deg)',
      width: '32px',
    },
    '& div:nth-child(2)': {
      transform: 'rotate(-45deg) translateY(-6px) translateX(5px)',
      width: 32,
    },
    '& div:nth-child(3)': {
      opacity: 0,
    },
  },
});

const NavToggler = () => {
  const classes = useStyles();
  const { showMenuMobile } = useSelector((state) => state.ui);
  const dispatch = useDispatch();
  const toggleMenu = () => {
    dispatch({ type: types.TOGGLE_MENU_MOBILE });
  };

  return (
    <div
      className={classnames(classes.navToggler, showMenuMobile && classes.expand)}
      onClick={toggleMenu}
    >
      <div className="line"></div>
      <div className="line"></div>
      <div className="line"></div>
    </div>
  );
};

export default NavToggler;
