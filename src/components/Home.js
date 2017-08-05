import React from 'react';
import ReactDOM from 'react-dom';
require('../../dist/styles/global.scss');


import About from './About';
import Header from './Header';
import ImgSlider from './ImgSlider';
import Footer from './Footer';
import Media from './Media';
import MyParallax from './MyParallax';
import Projects from './Projects';




export default class Home extends React.Component{

  render(){
    return (
      <div>
        <Header />
        <ImgSlider />
        <About />
        <Projects />
        <MyParallax />
        <Media />
        <Footer />
      </div>
    );
  }
}
