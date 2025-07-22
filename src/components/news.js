import React, { Component } from "react";
import PropTypes from "prop-types";
import Newsline from "./newsline";

export class news extends Component {

  
   constructor(){
      super();
      this.state={
        article:[],
        loading:false
      }
    }
    async componentDidMount(){
      let api="https://newsapi.org/v2/everything?q=tesla&from=2025-06-22&sortBy=publishedAt&apiKey=b9dee5eb55da46df8c36b959a716b421"
let data = await fetch(api);
let parse= await data.json();
console.log(parse);
this.setState(
  {article :parse.articles}
)


    }
  
  render() {
   
    return (
      <div className="container my-4 ">
        <h1 className="mb-5">trendly-headlines</h1>
        <div className="row">
       {this.state.article.map((element)=>{
            return    <div className="col-md-4" key={element.url}>
                <Newsline title={`${element.title?.slice(0,55)}....`} description={`${element.description?.slice(0,88)}.....`}  imageUrl={element.urlToImage} url={element.url}/>
         </div> })}
          
          </div> 
         
        
      </div>
    );
  }
}

export default news;
