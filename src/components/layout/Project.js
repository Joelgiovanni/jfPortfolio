import React, { Component } from 'react';
import './styles/project.css';

class Project extends Component {
  render() {
    var tech = this.props.tech;
    var splitTech = tech.join(', ');

    return (
      <div className='container'>
        <div className='row mt-5 text-center'>
          <div className='col'>
            <p className='project-name'>{this.props.name}</p>
            <p className='project-desc mt-5 mx-auto'>{this.props.desc}</p>
            <p className='project-tech'>{splitTech}</p>
            <div className='container img-container mt-5 mb-5'>
              <img src={this.props.image} className='img-fluid' alt='Project' />
            </div>
          </div>
        </div>
        <div className='row project-row'>
          <div className='col-12 col-sm-6 text-center left-btn text-md-right'>
            <a
              className='project-button c-live-button'
              target='_blank'
              rel='noopener noreferrer'
              href={this.props.link}
            >
              See {''}Live
            </a>
          </div>
          <div className='col-12 col-sm-6 text-center right-btn text-md-left'>
            <a
              className='project-button c-code-button'
              target='_blank'
              rel='noopener noreferrer'
              href={this.props.gitLink}
            >
              See Code
            </a>
          </div>
        </div>
      </div>
    );
  }
}
export default Project;
