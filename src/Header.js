import React, { Component } from 'react';
class Header extends React.Component {
  render() {
    return (
      <div className="ReactedApp__header">
          <h2 className="ReactedApp__title">STUFF I WROTE</h2>
          <a href="#" className={
            this.props.isActive
            ?
            'ReactedApp__menu-toggle ReactedApp__menu-toggle--active'
            :
            'ReactedApp__menu-toggle'
          } onClick={this.props.toggleClass}>x</a>
      </div>
    )
  }
}
export default Header;
