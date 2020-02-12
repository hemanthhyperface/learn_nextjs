import React, { Component } from 'react'
import Head from 'next/head'

import Example from '../components/menu';
import SearchBar from '../components/searchbar';
import Nav from '../components/nav'
import Card from '../components/card'
import fetch from 'isomorphic-unfetch';
import Link from 'next/link';


const Dashboard = (props) => (
  
    <div>
    <Head>
      <title>Signin</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" key="viewport"/>
      <link
        href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
        rel="stylesheet"
        integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
        crossOrigin="anonymous"
      />
       
    </Head>
    <Example>  </Example>
    <SearchBar></SearchBar>
    <div className="row">
   <div className="col-md-1">
    </div>
    
    <div className="col-md-9">
    {props.shows.map(show => (
        <Card key={show.title} title={show.title} description={show.description} image={show.urlToImage} url={show.url}></Card>
      ))}
      </div>
      <div className="col-md-2">
        </div>
      </div>
    );
      
   
    </div>
  )
  Dashboard.getInitialProps = async function() {
    const res = await fetch('https://newsapi.org/v2/top-headlines?country=us&apiKey=d5afb4a608cc419488e3e42012a4d75c');
    console.log(res);
    const data = await res.json();
  
    console.log(`Show data fetched. Count: ${data.length}`);
    if(data){
    return {
      shows: data.articles.map(entry => entry)
    };
  }
  };
  
  
  export default Dashboard