import React from 'react';





export default class Media extends React.Component{


  render(){
    return (
        <div className="wrapper">
        <h4>Recent Topics from my <strong>Blog</strong></h4>
          <ul className="wrapper flex-container flex-container--colored">
            <li className="flex-item blog"><div><h3 className="wrapper blog--title">Isomorphism Explained</h3></div><div className="blog--content"><p className="wrapper about--text--blog">Have you heard the term isomorphic lately and wonder what the hype is about? This post covers what Isomorphism is as it relates to JavaScript applications. I also provide an overview on isomorphic libraries.</p><div className="flex-container"><h6 className="flex--content"><p className="about--text--blog">Read the full post on Medium</p></h6><li className="flex--content"><a href="https://medium.com/@gURLmeetsCode/isomorphism-2c13b256b1aa" className="blog--media"><img src="/images/medium-logo-688.png" className="social-nav__photo" /></a></li></div></div></li>
            <li className="flex-item blog"><div><h3 className="wrapper blog--title">JS: Reduce vs For Loop</h3></div><div className="blog--content"><p className="wrapper about--text--blog">This post dives into what goes when you use the built in methods, For Loop and Reduce. I also provide runtime data comparing the performance of the two methods. I also cover folds, explaining the use case and definition.</p><div className="flex-container"><h6 className="flex--content"><p className="about--text--blog">Read the full post on Medium</p></h6><li className="flex--content"><a className="blog--media" href="https://codeburst.io/reduce-vs-for-loop-3c1a84e63872"><img src="/images/medium-logo-688.png" className="social-nav__photo" /></a></li></div></div></li>
            <li className="flex-item blog"><div><h3 className="wrapper blog--title">CSS: Have you met BEM?</h3></div><div className="blog--content"><p className="wrapper about--text--blog"> I was recently working on a project when I got introduced to the BEM methodolgy. I loved it so much that I decided to share! In this post I provide exmples using the methodolgy as well as resources for further learning.</p><div className="flex-container"><h6 className="flex--content"><p className="about--text--blog">Read the full post on Medium</p></h6><li className="flex--content"><a href="https://codeburst.io/have-you-met-bem-15864c642a61" className="blog--media"><img src="/images/medium-logo-688.png" className="social-nav__photo" /></a></li></div></div></li>
            <li className="flex-item blog"><div><h3 className="wrapper blog--title">Dev: Nextjs and Webpack 2 </h3></div><div className="blog--content"><p className="wrapper about--text--blog"> Adressing the frustration from Webpack tooling, I have provided resources to help get a better understanding of webpack in addition to suggesting an alternative, NextJS. Feature details are covered in the post.</p><div className="flex-container"><h6 className="flex--content"><p className="about--text--blog">Read the full post on Medium</p></h6><li className="flex--content"><a href="https://medium.com/@gURLmeetsCode/getting-started-with-webpack-2-and-next-js-a1c4d4161c1" className="blog--media"><img src="/images/medium-logo-688.png" className="social-nav__photo" /></a></li></div></div></li>
        </ul>
      </div>
    );
  }
}
