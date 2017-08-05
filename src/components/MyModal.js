import React from 'react';
import {Link} from 'react-router'


const display = {
  display: 'block'
};
const hide = {
  display: 'none'
};
export default class Modal extends React.Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);

    this.state = {
      toggle: false
    }
  }
  toggle(event) {
    this.setState(prevState => ({
      toggle: !prevState.toggle
    }));
  }
  render() {
    var modal = [];
    modal.push(
      <div className="modal" style={this.state.toggle ? display : hide}>
      <div className="modal-content">
        <p className="modal__description">Thank you for visting my website! If you are interested in getting in contact with me, feel free to use the options below.</p>
        <div className="flex-container social-btns">
          <Link to="https://docs.google.com/document/d/1OLyblC0tB4NxHmaaFBhlgOfqOMvrAgZ_Wlng6Io8EBc/pub" className="welcome__btn"> Resume PDF</Link>
          <Link to="mailto:kellynatashav@yahoo.com" className="welcome__btn">Hire Me</Link>
          <Link to="https://kellz4.typeform.com/to/gJ9wtk" className="welcome__btn">Leave Feedback</Link>
        </div>
      </div>
      <div className="modal-footer">
        <a onClick={this.toggle}>Close</a>
      </div>
    </div>
    );
    return (
      <div>
        <a className="btns btns--small" onClick={this.toggle}>Get in Touch</a>
        {modal}
      </div>
    );
  }
}
