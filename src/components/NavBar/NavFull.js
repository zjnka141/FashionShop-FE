import React from 'react'
import Container from '@material-ui/core/Container'
import {makeStyles} from '@material-ui/core/styles'

const useStyles = makeStyles((theme)=> ({
  fullNav: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: '100%',
    maxWidth: 1140,
  },
  menuItems: props => ({
    listStyle: 'none',
    display: 'flex',
    alignItems: 'center',
    margin: 0,
    height: '100%',
    transition: '0.3s',
    '& li': {
      position: 'relative',
      paddingLeft: '30px',
      cursor: 'pointer',
      height: '100%',
      lineHeight: `${props.scrolled ? '50px' : '70px'}`,
      textTransform: 'uppercase',
      fontSize: '0.925rem',
      transition: '0.3s',
      '&:before': {
        content: '""',
        position: 'absolute',
        bottom: `${props.scrolled ? '10px' : '20px'}`,
        left: 30,
        width: '30px',
        height: '2px',
        transform: 'scaleX(0)',
        background: theme.palette.secondary.main,
        transition: '0.3s',
      },
      '&:hover': {
        color: theme.palette.secondary.main,
        '&:before': {
          transform: 'scaleX(1)'
        }
      },
    }
  }),
  logo: {
    fontWeight: 700,
    color: theme.palette.secondary.main,
    transition: '0.3s',
  }
}))

const NavFull = (props) => {
  const classes = useStyles(props);
  return (
    <Container maxWidth="md" className={classes.fullNav}>
      <div className={classes.logo}>LOGO</div>
      <ul className={classes.menuItems}>
        <li>Home</li>
        <li>Product</li>
        <li>Blog</li>
        <li>Contact</li>
      </ul>
    </Container>
  )
}

export default NavFull
