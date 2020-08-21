import React, { Component } from 'react';
import { Link, animateScroll as scroll } from 'react-scroll';
import ScrollAnimation from 'react-animate-on-scroll';

import './styles/header.css';

class Header extends Component {
  render() {
    return (
      <div id='header'>
        <div className='banner'>
          <div className='centered'>
            <ScrollAnimation
              duration={0.5}
              animateIn='fadeIn'
              animateOut='fadeOut'
              animateOnce={true}
            >
              <h1 className='my-name'>JOEL FERRALES</h1>
              <div className='second-header'>
                <p className='title'>Full-stack Web Developer</p>
                <br />
                <p className='seller'>
                  <strong>
                    Creative thinker fueled by a fascination to build great
                    ideas.
                  </strong>{' '}
                </p>
                <br />
                <br />
                <br />

                <button type='button' class='btn new-view-btn btn-lg'>
                  <Link
                    activeClass='active'
                    className='check'
                    to='about'
                    spy={true}
                    smooth={true}
                    offset={0}
                    duration={800}
                  >
                    VIEW MY WORK{' '}
                  </Link>{' '}
                </button>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
