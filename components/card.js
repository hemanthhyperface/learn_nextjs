import React, { Component } from 'react'
import Head from 'next/head'


const Card = (props) => (

  

<div className="col-md-4 float-right mt-5">
<div className="card">
  <img src={props.image}  className="card-img-top mt-3 ml-3" alt="..."></img>
  <div className="card-body">
    <h5 className="card-title">{props.title}</h5>
    <p className="card-text">{props.description}</p>
    <a href={props.url} className="btn btn-primary">More</a>
  </div>
  
</div>
<style jsx>{`
h5{
 width: 20ch;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
    p {
     width: 20ch;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
 }
 img{
  width: 250px;
  height:250px;
 }
    `}</style>
</div>


        
)



export default Card;