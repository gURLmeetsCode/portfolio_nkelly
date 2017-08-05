import React from 'react';
require('../../dist/styles/global.scss');





export default class About extends React.Component{


  render(){
    return (
        <div className="wrapper">
          <div>
          <h4 className="about--title">Who is gURLmeetsCode?</h4>
          <p className="about--text">My coding journey started in 2013 with Code Academy. The platform was relatively new and I decided I wanted to be serious about learning to code. The experience created a desire to learn more and improve. I spent time at Hackbright Academy in their part time course, and I attended meetups hosted by GDI ( Girl Develop It) San Francisco Chapter. I became a sponge for all things "Tech". I was working full time at Facebook when I made the decision to enroll in the Full Stack Development program with the Flatiron School in New York. I am a testament to the fact that no journey is one direction, along the way you encounter peaks and valleys, ultimately what makes the difference is your persistance and consistency. Now I wake up every morning excited at what I can build and learn.</p>
          </div>
        </div>
    );
  }
}
