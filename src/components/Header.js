import React from 'react';
import {Link} from 'react-router';
require('../../dist/styles/global.scss');





export default class Header extends React.Component{


  render(){
    return (
        <div className="header">
          <ul>
            <li><Link className="header--active" to="/home">Home</Link></li>
            <li><Link to="/">Welcome</Link></li>
            <li><a href="https://docs.google.com/document/d/1OLyblC0tB4NxHmaaFBhlgOfqOMvrAgZ_Wlng6Io8EBc/pub">Resume PDF</a></li>
          </ul>
        </div>
    );
  }
}
