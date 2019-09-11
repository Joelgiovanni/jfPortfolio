import React, { Component } from 'react';
import { Link, animateScroll as scroll } from 'react-scroll';
import './styles/footer.css';

class Footer extends Component {
  render() {
    return (
      <div className='footer-container container-fluid'>
        <div className='container'>
          <div className='row up-row'>
            <div className='col text-center'>
              <span className='up'>
                <Link
                  activeClass='active'
                  to='header'
                  spy={true}
                  smooth={true}
                  offset={0}
                  duration={500}
                >
                  <i className='fas fa-angle-double-up up-icon' />
                </Link>
              </span>
            </div>
          </div>
          <div className='row'>
            <div className='col text-center mt-4'>
              <a
                target='_blank'
                rel='noopener noreferrer'
                href='https://github.com/Joelgiovanni'
              >
                {' '}
                <i className='fab fa-github contact-me-icon middle mr-3' />
              </a>
              <a
                target='_blank'
                rel='noopener noreferrer'
                href='https://www.linkedin.com/in/joel-ferrales-733746157/'
              >
                {' '}
                <i className='fab fa-linkedin-in contact-me-icon' />
              </a>
            </div>
          </div>
          <div className='row'>
            <div className='col text-center text-white mt-3'>
              {' '}
              <p className='name'>
                JOEL FERRALES{' '}
                <span className='date'> &#169;{new Date().getFullYear()}</span>{' '}
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;
