import React, { Component } from 'react'

export default class NewsItems extends Component {
  render() {
    let {title, description,imageUrl,newsUrl,author,date,source} = this.props;
    return (
      <div className='my-3'>
        <div className="card" style={{width: "22rem"}}>
            <img src={imageUrl ? imageUrl : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFRc8eUWXA_vARq62f53QX-r4rBBcp-B_D4Q&s"} alt="..." className='news-image' />
            <div className="card-body">
            <h5 className="card-title">{title}... <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
              {source}
            </span></h5>
            <p className="card-text">{description}</p>
            <p className="card-text"><small class="text-body-secondary">By {! author ? "Unkown" : author} on {new Date(date).toGMTString()}</small></p>
            <a href={newsUrl} target='_blank' className="btn btn-primary">Read More</a>
            </div>
        </div>
      </div>
    )
  }
}
