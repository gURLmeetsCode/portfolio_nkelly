import React from 'react';



export default class NotFound extends React.Component{
  render(){
    return(
      <div>
        <h1 className="notfound--title">404</h1>
        <p className="notfound--statement">It appears the page you were looking for does not exist. Sorry about that!</p>
      </div>
    )
  }
}
