import React, { Component } from 'react';
import Project from './Project';
import blogImg2 from '../../images/blog-mock2.png';
import weatherImg from '../../images/weather-mock.png';
import dineImg from '../../images/dine.png';
import './styles/work.css';

class Work extends Component {
  render() {
    const personalBlog = {
      name: 'Personal Blog',
      blogTech: [
        'JavaScript',
        'Express',
        'React.js',
        'Node.js',
        'MongoDB',
        'Passport.js'
      ],
      gitLink: 'https://github.com/Joelgiovanni/privateBlogs',
      link: 'https://private-personal-blog.herokuapp.com',
      desc:
        'Mern app for users to keep a private online journal. This app features full authentication. With a RESTful api users have full control of how they manage every individual entry.',
      image: blogImg2
    };

    const realWeather = {
      name: 'Real Weather',
      blogTech: ['React.js', 'Axios', 'API', 'Passport.js', 'JavaScript'],
      gitLink: 'https://github.com/Joelgiovanni/weather-API',
      link: 'http://realtimeweatherapi.herokuapp.com/',
      desc:
        'A simple yet elegant 5-day forecast React app. This was a really enjoyable app to work on due to its high complexity. Working with such a huge JSON response was a new challenge to filter out and retrieve only the appropriate data.',
      image: weatherImg
    };

    const toDineOrNot = {
      name: 'To Dine Or Not To DIne',
      blogTech: ['React.js', 'Zomato API', 'JavaScript es6'],
      gitLink: 'https://github.com/Joelgiovanni/toDineOr',
      link: 'https://todine.herokuapp.com',
      desc:
        "React app that uses the user's geolocation to be able to find several eateries in the area and randomly select one for the user to try! The result's include the business name, cuisine, location & menu.",
      image: dineImg
    };

    return (
      <div className='container-fluid bg-white'>
        <div className='container work-container' id='work'>
          <div className='row work-row'></div>
          <Project
            name={personalBlog.name}
            tech={personalBlog.blogTech}
            desc={personalBlog.desc}
            image={personalBlog.image}
            gitLink={personalBlog.gitLink}
            link={personalBlog.link}
          />
          <Project
            name={realWeather.name}
            tech={realWeather.blogTech}
            desc={realWeather.desc}
            image={realWeather.image}
            gitLink={realWeather.gitLink}
            link={realWeather.link}
          />
          <Project
            name={toDineOrNot.name}
            tech={toDineOrNot.blogTech}
            desc={toDineOrNot.desc}
            image={toDineOrNot.image}
            gitLink={toDineOrNot.gitLink}
            link={toDineOrNot.link}
          />
        </div>
      </div>
    );
  }
}

export default Work;
