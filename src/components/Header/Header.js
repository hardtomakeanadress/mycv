import React from 'react';
import './Header.css';
import NavMenu from '../NavMenu/NavMenu';
import Name from '../Name/Name';

const Header = (props) => {

    return(
        <div id="header">
            <Name myName="Bukos Stefan Adrian" quote="A mind is like a parachute. It doesn't work if it is not open."/>
            <NavMenu />
        </div>
    );
};

export default Header;