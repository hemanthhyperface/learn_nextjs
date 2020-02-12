import React, { Component, useState,useEffect } from "react";
import Head from "next/head";
import axios from 'axios';
import Card from '../components/card'
import { render } from "react-dom";
import { css } from "@emotion/core";
// First way to import
import { RingLoader } from "react-spinners";
// Another way to import. This is recommended to reduce bundle size


const SearchBar = props => {
  const [query, setQuery] = useState();
  const [loading, setLoading] = useState(false);
  const [news, setNews] = useState({articles:[]});

  const handleChange = event => setQuery(event.target.value);
  const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;
  async function fetchData() {
    setLoading(true);
    // You can await here
    const res = await fetch(`https://newsapi.org/v2/everything?q=${query}bitcoin&apiKey=d5afb4a608cc419488e3e42012a4d75c`);
    
    const data = await res.json();
    // console.log(data);
    
        setNews(data);
        setLoading(false);
    //   console.log(news);
    
      
     
    // ...
  }

  useEffect(() => {
    console.log(news)
    console.log('hello')
  }, [news])
  
   


  return (
    <div>
    <div className="row" >
      <div className="col-md-1"></div>
    <div className="col-md-4 float-right ml-3 mt-5">
      <input className="form-control"
        type="text"
        id="searchbar"
        onBlur={handleChange}
        placeholder="search news here"
      ></input>
      </div>
      <div className="col-md-2 float-right mt-5">
      <button className="btn btn-info" onClick={fetchData}>
        Search
      </button>
      
      
    </div>
    </div>
    <div className="row">
   <div className="col-md-1">
   
    </div>
   
    <div className="col-md-9 mt-1">
    {loading &&
    <RingLoader
      css={override}
      size={520}
      //size={"150px"} this also works
      color={"#123abc"}
      loading={loading}
    />
}
    {news.articles.map(show => (
      news.articles.length > 0 ?
      <Card key={show.title} title={show.title} description={show.description} image={show.urlToImage} url={show.url}></Card>   :  <Card></Card>
    ))}
     </div>
      <div className="col-md-2">
        </div>
      </div>
    </div>
  );
      
};

export default SearchBar;
