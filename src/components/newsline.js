import React, { Component } from 'react'
import PropTypes from 'prop-types'

export class newsline extends Component {
  static propTypes = {

  }

  render() {
    let {title,description,imageUrl,url}
    =this.props;
    return (
      <div>
      <div className="card" style={{width: "18rem"}}>
  <img
  src={imageUrl || "https://media.wired.com/photos/68531ba03ca23a58119ac365/191:100/w_1280,c_limit/061825-amercian-bitcoin-false-start.jpg"}
  onError={(e) => {
    e.target.onerror = null; 
    e.target.src = "https://media.wired.com/photos/68531ba03ca23a58119ac365/191:100/w_1280,c_limit/061825-amercian-bitcoin-false-start.jpg";
  }}
  className="card-img-top"
  alt="news"
/>

  <div className="card-body">
    <h5 className="card-title">{title}</h5>
    <p className="card-text">{description}</p>
    <a href={url} className="btn btn-primary">Go somewhere</a>
  </div>
</div>
      </div>
    )
  }
}

export default newsline
