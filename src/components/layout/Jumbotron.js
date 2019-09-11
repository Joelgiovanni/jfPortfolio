import React, { Component } from 'react';
import './styles/jumbotron.css';

class Jumbotron extends Component {
  render() {
    return (
      <div className='jumbotron jumbotron-fluid text-center'>
        <div className='container'>
          <h1 className='display-4 mt-4'>Recent Work</h1>
          <p className='lead mt-4'>
            Below you can see some projects that I have been working on. I have
            listed the main technologies used in each one.
          </p>
        </div>
      </div>
    );
  }
}

export default Jumbotron;
