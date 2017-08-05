import React from 'react';
import {Link} from 'react-router'
require('../../dist/styles/global.scss');

import Modal from './MyModal'

export default class MyParallax extends React.Component {
    render() {
      return (
        <div className="parallaxs">
          <div className="parallaxs--inner">
            <div className="parallaxs__text-content">
              <h1 className="parallaxs__title">Stay Connected</h1>
              <Modal />
            </div>
          </div>
       </div>
      );
    }
  }
