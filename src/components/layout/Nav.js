import React, { Component } from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import { Link, animateScroll as scroll } from 'react-scroll';
import './styles/nav.css';

class Nav extends Component {
  render() {
    return (
      <div className='sticky-top'>
        <ScrollAnimation duration={3} animateIn='fadeIn'>
          <ul className='nav justify-content-center sticky-top'>
            <li className='nav-item link'>
              <Link
                className='nav-link'
                activeClass='active'
                to='about'
                spy={true}
                smooth={true}
                offset={0}
                duration={800}
              >
                {' '}
                ABOUT ME
              </Link>
            </li>
            <li className='nav-item link'>
              <Link
                className='nav-link'
                activeClass='active'
                to='work'
                spy={true}
                smooth={true}
                offset={-20}
                duration={800}
              >
                {' '}
                MY WORK
              </Link>
            </li>
            <li className='nav-item link '>
              <Link
                className='nav-link'
                activeClass='active'
                to='contact'
                spy={true}
                smooth={true}
                offset={90}
                duration={800}
              >
                {' '}
                CONTACT
              </Link>
            </li>
          </ul>
        </ScrollAnimation>
      </div>
    );
  }
}

export default Nav;
