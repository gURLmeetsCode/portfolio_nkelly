import React from 'react';
import Slide from '../../node_modules/react-materialize/lib/Slide';
import Slider from '../../node_modules/react-materialize/lib/Slider';




export default class ImgSlider extends React.Component{
  render(){
    return (
      <div className="wrapper">
        <Slider>
            <Slide
              src="/images/profile_photo.jpg"
              title="Software Developer">
              I like building beautiful user experiences.
            </Slide>
            <Slide
              src="/images/jopwell_pic.jpg"
              title="Lover of Learning"
              placement="left">
              Fireside chat with Camille Founrier.
            </Slide>
            <Slide
              src="/images/gdisf.jpg"
              title="Teamplayer"
              placement="right">
              Girls Develop IT - SF.
            </Slide>
          </Slider>
      </div>

    );
  }
}
