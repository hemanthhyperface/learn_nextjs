import React, { Component } from 'react'
import Head from 'next/head'
import { bubble as Menu } from 'react-burger-menu'
import Nav from '../components/nav'

export default class Example extends React.Component {
  showSettings (event) {
    event.preventDefault();
   
  }

  render () {

    var styles = {
        bmBurgerButton: {
          position: 'fixed',
          width: '36px',
          height: '30px',
          left: '36px',
          top: '36px'
        },
        bmBurgerBars: {
          background: '#373a47'
        },
        bmBurgerBarsHover: {
          background: '#a90000'
        },
        bmCrossButton: {
          height: '24px',
          width: '24px'
        },
        bmCross: {
          background: '#bdc3c7'
        },
        bmMenuWrap: {
          position: 'fixed',
          height: '100%'
        },
        bmMenu: {
          background: '#373a47',
          padding: '2.5em 1.5em 0',
          fontSize: '1.15em'
        },
        bmMorphShape: {
          fill: '#373a47'
        },
        bmItemList: {
          color: '#b8b7ad',
          padding: '0.8em'
        },
        bmItem: {
          display: 'inline-block'
        },
        bmOverlay: {
          background: 'rgba(0, 0, 0, 0.3)'
        },
        
      }
    // NOTE: You also need to provide styles, see https://github.com/negomi/react-burger-menu#styling
    return (
        <div>
         
      <Menu styles={ styles }>
        <a id="home" className="menu-item" href="/">Home</a><br/>
        <a id="about" className="menu-item" href="/about">About</a><br/>
        <a id="contact" className="menu-item" href="/contact">Contact</a><br/>
        <a onClick={ this.showSettings } className="menu-item--small" href="">Settings</a>
        </Menu>
      
        
</div>
    );
}
}
