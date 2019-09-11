import React, { Component } from 'react';
import ScrollAnimation from 'react-animate-on-scroll';

import './styles/contact.css';

class Contact extends Component {
  render() {
    return (
      <div className='contact-container container-fluid' id='contact'>
        <div class='container'>
          <div class='row'>
            <div class='col text-center'>
              <ScrollAnimation animateIn='fadeInDown' animateOnce={true}>
                <h1 className='contact-header'>CONTACT</h1>
              </ScrollAnimation>

              <ScrollAnimation
                animateIn='bounceInRight'
                delay={300}
                animateOnce={true}
              >
                <h4 className='mt-4 mb-5 sub-header'>
                  LET'S CREATE <br />
                  SOMETHING GREAT
                </h4>
              </ScrollAnimation>
              <ScrollAnimation
                animateIn='bounceInLeft'
                delay={500}
                animateOnce={true}
              >
                <span className='contact-support'>
                  <strong>
                    I'm always looking for something new to work on. <br />
                    If you have a question or want to work together, just send
                    me a direct message below!
                  </strong>
                </span>{' '}
              </ScrollAnimation>

              <br />
              <ScrollAnimation
                duration={2}
                animateIn='fadeIn'
                animateOnce={true}
              >
                <button className='contact-button'>
                  <span className='mr-2'>
                    <a href='mailto:joelgiovanni17@gmail.com' target='_top'>
                      <i class='far fa-paper-plane plane mr-2' />
                      GET IN TOUCH
                    </a>
                  </span>
                </button>{' '}
              </ScrollAnimation>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;
