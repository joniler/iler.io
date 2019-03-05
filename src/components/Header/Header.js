import React from 'react';
import './Header.scss';
import logo from '../../images/logo.svg';


const Header = () => {
    return(
        <header>
            <img className="logo" src={logo} alt="iler logo"/>
        </header>
    )
}

export default Header;

