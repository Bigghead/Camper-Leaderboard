import React, { Component } from 'react';

class Header extends Component {
    render() {
        return (
            <div>
                <ul className="nav nav-tabs navbar-inverse">
                    <li role="presentation" ><a href="#"><h4>Freecodecamp Campers</h4></a></li>
                   
                </ul>
            </div>
        );
    }
}

export default Header;