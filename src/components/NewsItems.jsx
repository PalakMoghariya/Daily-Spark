import React, { Component } from 'react'

export default class NewsItems extends Component {
  render() {
    let {title, description,imageUrl,newsUrl} = this.props;
    return (
      <div className='my-3'>
        <div className="card" style={{width: "18rem"}}>
            <img src={imageUrl ? imageUrl : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFRc8eUWXA_vARq62f53QX-r4rBBcp-B_D4Q&s"} alt="..."/>
            <div className="card-body">
            <h5 className="card-title">{title}...</h5>
            <p className="card-text">{description}</p>
            <a href={newsUrl} target='_blank' className="btn btn-primary">Read More</a>
            </div>
        </div>
      </div>
    )
  }
}
