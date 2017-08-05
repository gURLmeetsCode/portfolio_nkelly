import React from "react";
import {Link} from 'react-router'

export default class Welcome extends React.Component {
render() {
return (
  <div className='welcome'>
      <img className='welcome__img' src="/images/profile_photo.jpg" alt="natasha k" />
        <div className='welcome--blue'>
          <h4 className='welcome__title'>HI. I&#39;M NATASHA!</h4>
          <p className='welcome__quote'>"I believe programming allows you to be in a state of constant professional and personal improvement. I enjoy the fact there is always something new to learn or experiment with!"</p>
          <br />
            <h4 className='welcome__attr'>Software Developer | Blogger | Lover of Learning</h4>
          <h4 className='welcome__statement'>Thank you for visiting my personal website. I am excited to share my love of technology with you. </h4>
          <br />
            <div className='welcome__btn--center'>
              <div>
                <li className="btns--welcome"><Link to="/home" className="welcome__btn">Welcome</Link></li>
              </div>
            </div>
          <div className='social-nav social-nav--welcome'>
            <div className='social-nav__row'>
             <li><Link to={"https://www.facebook.com/natasha.kelly.16"}><img src="/images/official-facebook-logo.png" className="social-nav__photo" /></Link></li>
             <li><Link to={"https://twitter.com/gURLmeetsCode"}><img src="/images/new-twitter-logo.png" className="social-nav__photo" /></Link></li>
             <li><Link to={"https://www.linkedin.com/in/natashakelly1/"}><img src="/images/linkedin-logo.png" className="social-nav__photo" /></Link></li>
             <li><Link to={"https://github.com/gURLmeetsCode"}><img src="/images/github-logo.png" className="social-nav__photo" /></Link></li>
             <li><Link to={"https://medium.com/@gURLmeetsCode"}><img src="/images/medium-logo-688.png" className="social-nav__photo" /></Link></li>
           </div>
         </div>
        </div>
      </div>
  );
 }
}
