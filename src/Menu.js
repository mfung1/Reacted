import React, { Component } from 'react';
class Menu extends React.Component {
  render(){
    return(
      <ul className={this.props.menuIsActive ? "ReactedApp__links ReactedApp__links--active" : "ReactedApp__links"}>
        <li className="ReactedApp__link">
          <a href="#">Link1</a>
        </li>
        <li className="ReactedApp__link">
          <a href="#">Link2</a>
        </li>
        <li className="ReactedApp__link">
          <a href="#">Link3</a>
        </li>
        <li className="ReactedApp__link">
          <a href="#">Link4</a>
        </li>
        <li className="ReactedApp__link">
          <a href="#">Link5</a>
        </li>
      </ul>
    )
  }
}

export default Menu;
