import React, {useState} from 'react';
import ReactWOW from 'react-wow';
import {Link, withRouter} from 'react-router-dom';

import './Navbar.scss';
import NavbarItem from './NavbarItem/NavbarItem';

const Navbar = (props) => {
    const [isNavToggled, toggleNav] = useState(false);

    const navItems = [
        {
            key: 'sobre',
            label: 'Sobre a campanha',
            offset: -80
        },

        {
            key: 'quem-ajua',
            label: 'Quem ajuda',
            offset: -80
        },

        {
            key: 'unimed',
            label: 'Unimed',
            offset: -80
        }
    ]
    return (
        <nav className={`Navbar`}>
            <ReactWOW animation='fadeInDown'>
                <div className="Navbar__content container">
                    <Link to="/">
                        <img src="" className="Navbar__brand" alt="Logo SACI 2019"/>
                    </Link>

                    <button
                        className="btn-transparent Navbar__toggler"
                        aria-expanded={isNavToggled}
                        onClick={() => toggleNav(!isNavToggled)}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </button>

                    <ul
                        className={`Navbar__links ${isNavToggled
                        ? 'active'
                        : ''}`}
                        aria-hidden={!isNavToggled}
                        onMouseDown={() => setTimeout(() => toggleNav(false),100)}>
                            { navItems.map( item => 
                                <NavbarItem 
                                    path={props.location.pathname}
                                    {...item}/>
                            )}
                    </ul>
                </div>
            </ReactWOW>
        </nav>
    )
}

export default withRouter(Navbar);