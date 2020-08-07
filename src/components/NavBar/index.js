import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import useScroll from '../../hooks/useScroll';
import classnames from 'classnames';
import Hidden from '@material-ui/core/Hidden';
import Collapse from '@material-ui/core/Collapse';
import NavToggler from './NavToggler';
import { useSelector } from 'react-redux';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Grid from '@material-ui/core/Grid';
import NavFull from './NavFull';

const useStyles = makeStyles((theme) => ({
  navbar: {
    position: 'fixed',
    top: 0,
    left: 0,
    height: props => props.scroll ? 50 : 70,
    backgroundColor: 'transparent',
    width: '100%',
    zIndex: 999,
    transition: '0.3s'
  },
  scrolled: {
    backgroundColor: 'white',
    boxShadow: '0 5px 30px rgba(0, 0, 0, 0.1)',
    transition: '0.3s',
  },
  navMobile: {
    marginTop: 70,
    backgroundColor: 'white',
    boxShadow: '0 5px 30px -5px rgba(0, 0, 0, 0.1)',
  },
  listItem: {
    '& > div': {
      padding: 20
    }
  }
}));

const NavBar = (props) => {
  const scroll = useScroll();
  const classes = useStyles({scroll});
  const { showMenuMobile } = useSelector((state) => state.ui);
  return (
    <nav className={classnames(classes.navbar, scroll && classes.scrolled)}>
      <Hidden xsDown>
          <NavFull scrolled={scroll}/>
      </Hidden>
      <Hidden smUp>
        <NavToggler />
        <Collapse in={showMenuMobile} timeout="auto" unmountOnExit className={classes.navMobile}>
          <List component="nav" className={classes.listItem}>
            <ListItem button>Home</ListItem>
            <ListItem button>Product</ListItem>
            <ListItem button>Blog</ListItem>
            <ListItem button>Contact</ListItem>
          </List>
        </Collapse>
      </Hidden>
    </nav>
  );
};

export default NavBar;
