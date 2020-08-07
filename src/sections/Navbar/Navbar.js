import React, {useState} from 'react';
import useScroll from '../../hooks/useScroll';
import { Link } from 'react-scroll';
import classnames from 'classnames';
import { Container } from '@material-ui/core';
import Logo from '../../asset/images/logo-appion.png';
import { NavLink } from 'react-router-dom';

const fakeMenus = [
  'home',
  'service',
  'portfolio',
  'skill',
  'testimonial',
  'blog',
  'login'
];

const MyNavbar = () => {
  const scroll = useScroll(50);
  const [expand, setExpand] = useState(false);

  return (
    <nav className={classnames("navbar", {scrolled: scroll})}>
      <Container className="nav-container">
        <div className="nav-logo">
          <img src={`${Logo}`} alt=""/>
        </div>
        <ul className={classnames("nav-items", {expand})}>
          {fakeMenus.map(e => (
            <li className="nav-item" onClick={() => setExpand(false)}>
              <NavLink className="nav-link" to={"/"+e}>{e}</NavLink>
            </li>
          ))}
        </ul>
      </Container>
      <div className={classnames("nav-toggler", {expand: expand})} onClick={() => setExpand(!expand)}>
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div>
    </nav>
  );
};

export default MyNavbar;
