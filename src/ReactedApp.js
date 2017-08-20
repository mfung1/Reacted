import React, { Component } from 'react';
import logo from './logo.svg';
import BlogPost from './blogPost.js';
import './sass/reactedApp/ReactedApp.sass';

class ReactedApp extends Component {
  render() {
    return (
      <div className="ReactedApp">
        <div className="ReactedApp__header">
          <div className="ReactedApp__header-wrapper">
            <img src={logo} className="ReactedApp__logo" alt="logo" />
            <h2 className="ReactedApp__title">Reacted Blog</h2>
          </div>
        </div>
        <section className="ReactedApp__content">
          <BlogPost title="This is not a title"/>
        </section>
      </div>
    );
  }
}

export default ReactedApp;
