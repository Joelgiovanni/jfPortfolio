import React, { Component } from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import './styles/about.css';

class About extends Component {
  render() {
    return (
      <div className='container-fluid bg-white'>
        <div className='container about-container' id='about'>
          <ScrollAnimation animateIn='bounceInRight' animateOnce={true}>
            <div className='row about-row'>
              <div className='col text-center '>
                <p className='about-header'>ABOUT</p>
              </div>
            </div>
          </ScrollAnimation>

          <ScrollAnimation animateIn='bounceInLeft' animateOnce={true}>
            <div className='row icons-row mt-4'>
              <div className='col-md-3 col-sm-6  col-xs-12 text-center box'>
                <div className='icon mx-auto'>
                  <i class='fas fa-mobile-alt inner-icon' />
                </div>
                <div className='title-supporting mt-3 text-center'>
                  <h3>Responsive</h3>
                  <p className='about-text'>
                    Designs that will work on large and small devices.
                  </p>
                </div>
              </div>
              <div className='col-md-3 col-sm-6 col-xs-12 text-center box'>
                <div className='icon mx-auto'>
                  <i class='fas fa-rocket inner-icon' />
                </div>
                <div className='title-supporting mt-3 text-center'>
                  <h3>Dynamic</h3>
                  <p className='about-text'>
                    {' '}
                    Bringing bland websites to life is a passion of mine.
                  </p>
                </div>
              </div>
              <div className='col-md-3 col-sm-6 col-xs-12 text-center box'>
                <div className='icon mx-auto'>
                  <i className='fas fa-fingerprint inner-icon' />
                </div>
                <div className='title-supporting mt-3 text-center'>
                  <h3>Unique</h3>
                  <p className='about-text'>
                    {' '}
                    No two people are the same. I keep that in mind with every
                    single project.
                  </p>
                </div>
              </div>
              <div className='col-md-3 col-sm-6 col-xs-12 text-center box'>
                <div className='icon mx-auto'>
                  <i class='far fa-lightbulb inner-icon' />
                </div>
                <div className='title-supporting mt-3 text-center'>
                  <h3>Instinctive</h3>
                  <p className='about-text'>
                    Consistently striving to make the right calls on what will
                    enhance a users experience.
                  </p>
                </div>
              </div>
            </div>{' '}
          </ScrollAnimation>
          <ScrollAnimation animateIn='fadeInUp' animateOnce={true}>
            <div className='row'>
              <div className='col col-md-6 col-12 text-center mt-5 mb-5'>
                <i className='fab fa-js-square language-icon'></i>
                <i className='fab fa-node language-icon'></i>
                <i className='fab fa-react language-icon'></i>
                <i className='fab fa-css3 language-icon'></i>
              </div>
              <div className='col col-md-6 col-12 mb-5'>
                <h3 className='mern-header text-center'>MERN STACK</h3>
                <p className='mern-bio mt-3 text-center'>
                  I'm a Full Stack Developer based in Denver, CO. I have a
                  strong passion for making a genuine difference in people’s
                  lives. <br />
                  <p className='great mt-1'>Let's do something great.</p>
                </p>
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </div>
    );
  }
}

export default About;
