import React from 'react';
import {withStyles} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Drawer from '@material-ui/core/Drawer';
import MenuItem from '@material-ui/core/MenuItem';
import IconButton from '@material-ui/core/IconButton';
import './Sidebar.css';



class Sidebar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      toggle: false,
    };
  }
  menuButton = () => {
		  return (
			<div>안뇽</div>
	);
	}
  menuItem = () => {
  return (
  <div className="header-container">	
  <nav role="navigation">
  <div  id="menuToggle">
    <input type="checkbox" />
    
    <span></span>
    <span></span>
    <span></span>
    
    <ul id="menu">
      <a href="#"><li>Home</li></a>
      <a href="#"><li>About</li></a>
      <a href="#"><li>Info</li></a>
      <a href="#"><li>Contact</li></a>
      <a href="https://erikterwan.com/" target="_blank"><li>Show me more</li></a>
     </ul>
    </div>
  </nav>	
  </div>
  );}		
		
  render() {
    return (
		<div className="sidebar">
			{this.menuItem()}
		</div>
	);
  }
}

export default Sidebar;

