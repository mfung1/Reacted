import React, { Component } from 'react';

import Header from './Header.js';
import Menu from './Menu.js';
import BlogPost from './blogPost.js';

import './sass/reactedApp/ReactedApp.sass';

class ReactedApp extends Component {
  constructor(props){
    super(props);
    this.toggleClass = this.toggleClass.bind(this);
    this.state = {
      menuActive: false,
    };
  }
  toggleClass() {
    const currentState = this.state.menuActive;
    this.setState({ menuActive: !currentState });
  }
  render() {
    return (
      <div className="ReactedApp">
        <Menu menuIsActive={this.state.menuActive}/>
        <section className="ReactedApp__content">
          <Header toggleClass={this.toggleClass} isActive={this.state.menuActive}/>
        </section>
      </div>
    );
  }
}

export default ReactedApp;
