import React, { Component } from 'react'
import NewsItems from './NewsItems'
import Loader from './Loader';

export class News extends Component {


  constructor() {
    super();
    this.state = {
      articles: [],
      loading: false,
      page: 1
    }
  }

  async componentDidMount() {
    let url = `https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=f71f57abf83842aaa2c5c080bc798f0e&pageSize=${this.props.pageSize}`;
    this.setState({loading :true});
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState({ articles: parsedData.articles,
      totalResults : parsedData.totalResults,
      loading :false
     });
  }

  handlePerviousPage = async () => {
    console.log("Previous");
    let url =`https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=f71f57abf83842aaa2c5c080bc798f0e&pageSize=${this.props.pageSize}&page=${this.state.page -1}`;
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({loading:true});
    console.log(parsedData);
    this.setState({
      articles: parsedData.articles,
      page: this.state.page - 1,
      loading:false
    });
  }


  handleNextPage = async () => {
    console.log("Next");

    if (!(this.state.page + 1 > Math.ceil(this.state.totalResults / this.state.page))) {
      let url =`https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=f71f57abf83842aaa2c5c080bc798f0e&pageSize=${this.props.pageSize}&page=${this.state.page + 1}`;
      let data = await fetch(url);
      this.setState({loading:true});
      let parsedData = await data.json();
      console.log(parsedData);
      this.setState({
        articles: parsedData.articles,
        page: this.state.page + 1,
        loading:false
      });
    }
  }


  render() {
    return (
      <div className='container'>
        <h1>Today's Top Headlines</h1>
        {this.state.loading && <Loader/>}
        <div className="row">
          {! this.state.loading && this.state.articles.map(
            (element) => {
              return <div className="col-md-4" key={element.url}>
                <NewsItems title={element.title ? element.title.slice(0, 55) : ""} description={element.description ? element.description.slice(0, 88) : ""} imageUrl={element.urlToImage} newsUrl={element.url} />
              </div>
            }

          )}
        </div>

        <div className='d-flex justify-content-between my-3'>
          <button type="button" disabled={this.state.page <= 1} className="btn btn-outline-dark" onClick={this.handlePerviousPage}>	&larr; Previous</button>
          <button type="button" className="btn btn-outline-dark" disabled={this.state.page + 1 > Math.ceil(this.state.totalResults / this.state.page)} onClick={this.handleNextPage}>Next &rarr;</button>
        </div>
      </div>
    )
  }
}

export default News
