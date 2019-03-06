import React from 'react';
import './Header.scss';
import logo from '../../images/logo.svg';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faTwitter, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Header = () => {
    return(
        <header>
            <img className="logo" src={logo} alt="iler logo"/>
            <nav className="headerNav">
                <a rel="noopener noreferrer" target="_blank" className="headerNavLink" href="https://github.com/joniler">
                    <FontAwesomeIcon className="icon" icon={faGithub}/>
                </a>
                <a rel="noopener noreferrer" target="_blank" className="headerNavLink" href="https://twitter.com/joniler">
                    <FontAwesomeIcon className="icon" icon={faTwitter}/>
                </a>
                <a rel="noopener noreferrer" target="_blank" className="headerNavLink" href="https://www.linkedin.com/in/jon-iler-aab58a34/">
                    <FontAwesomeIcon className="icon" icon={faLinkedin}/>
                </a>
            </nav>
            
            
        </header>
    )
}

export default Header;

