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
                <p className='title'>Fullstack Web Developer</p>
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
                <div className='view-work mx-auto'>
                  <p className='mt-3'>
                    <Link
                      activeClass='active'
                      to='about'
                      spy={true}
                      smooth={true}
                      offset={0}
                      duration={800}
                    >
                      VIEW MY WORK{' '}
                    </Link>
                  </p>
                </div>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
