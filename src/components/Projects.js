import React from 'react';

require('../../dist/styles/global.scss');


export default class Projects extends React.Component{
  render(){
          return (
              <div className="wrapper">
              <h4>Check out some of my <strong>Projects</strong></h4>
                <ul className="wrapper flex-container flex-container--colored">
                  <li className="flex-item--projects"><div className="flex-container"><h6 className="flex--content"><a href="https://expresslaundry.herokuapp.com/">Express 1 </a></h6><li className="flex--content"><a href={"https://github.com/gURLmeetsCode/express1_laundry_website.git"}><img src="/images/github-logo.png" className="social-nav__photo" /></a></li></div><p className="wrapper about--text--projects"><strong>Developed company advertising platform following single page application design. Implementing JavaScript, ReactJS and MeteorJS to enhance online presence by 4X resulting in increased foot-traffic.</strong></p><p className="wrapper about--text--projects">Stack Includes: MeteorJS, ReactJS, Google Places API, MongoDB, Mocha, Chai, Enzyme, Sinon, Google Analytics, and Heroku.</p></li>
                  <li className="flex-item--projects"><div className="flex-container"><h6 className="flex--content"><a href="#">JumpSTRT</a></h6><li className="flex--content"><a href={"https://github.com/gURLmeetsCode/jumpSTRT.git"}><img src="/images/github-logo.png" className="social-nav__photo" /></a></li></div><p className="wrapper about--text--projects"><strong>Time management platform that leverages the Google Maps Directions API for an optimized commute to the workplace.Developed ReactJS frontend views with 8+ testable components and 2 reusable components which allowed for 90% modularity of codebase. </strong></p><p className="wrapper about--text--projects">Stack Includes: MeteorJS, ReactJS, Google Maps Directions API, MongoDB, Mocha, Chai, Enzyme, Sinon and Heroku.</p></li>
                  <li className="flex-item--projects"><div className="flex-container"><h6 className="flex--content"><a href="https://github.com/gURLmeetsCode/07_twitter_api_tester.git">TwittyPy</a></h6><li className="flex--content"><a href={"https://github.com/gURLmeetsCode/07_twitter_api_tester.git"}><img src="/images/github-logo.png" className="social-nav__photo" /></a></li></div><p className="wrapper about--text--projects"><strong>Implemented data mining techniques to analyze Twitter data to see how frequently certain keywords appear in job posts. Crafted Python script to run user analysis on 50+ Tweet hashtags that mentioned ‘Junior Developers,’ integrating Tweepy framework to streamline OAuth authentication process.</strong></p><br/><p className="wrapper about--text--projects">Stack Includes: PIP, Tweepy, and Python. </p></li>
              </ul>
            </div>
          );
        }
      }
