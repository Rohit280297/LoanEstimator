import React from 'react';
import './Navbar.css';
import logo from '../../assets/images/logo.png';
class Navbar extends React.Component{
    render(){
        return(
            <div className="Navbar">
                <img src={logo} alt="Logo" id="logo"/>
                <h3 id="brand">FullThrottle <span style={{color:"white"}}>Labs</span></h3>

                <ul className="NavList">
                    <li className="ListItem">Home</li>
                    <li className="ListItem">Calculator</li>
                    <li className="ListItem">About</li>
                    <li className="ListItem">Partners</li>
                    <li className="ListItem">Contact</li>
                </ul>
            </div>
        )
    }
}

export default Navbar;