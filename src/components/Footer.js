import React from 'react';





export default class Footer extends React.Component{
  render(){
    return (
        <div className="site-footer">
          <div className="wrapper">
               <div className='social-nav social-nav--welcome'>
                 <div className='social-nav__row--footer'>
                  <li><a href={"https://www.facebook.com/natasha.kelly.16"}><img src="/images/official-facebook-logo.png" className="social-nav__photo" /></a></li>
                  <li><a href={"https://twitter.com/gURLmeetsCode"}><img src="/images/new-twitter-logo.png" className="social-nav__photo" /></a></li>
                  <li><a href={"https://www.linkedin.com/in/natashakelly1/"}><img src="/images/linkedin-logo.png" className="social-nav__photo" /></a></li>
                  <li><a href={"https://github.com/gURLmeetsCode"}><img src="/images/github-logo.png" className="social-nav__photo" /></a></li>
                  <li><a href={"https://medium.com/@gURLmeetsCode"}><img src="/images/medium-logo-688.png" className="social-nav__photo" /></a></li>
                </div>
              </div>
              <p><span className="site-footer__text">Made with Love by Natasha Kelly</span></p>
            </div>
        </div>
    );
  }
}
