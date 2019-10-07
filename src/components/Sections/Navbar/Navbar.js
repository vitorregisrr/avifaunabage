import React from 'react';
import WOW from 'react-wow';

import './Navbar.scss';

const Navbar = (props) => {

    return (
        <WOW animation="fadeInDown">
            <nav className={`Navbar`}>
                <h1 className="Navbar__brand">
                    Avifauna Urbana de Bagé/RS
                </h1>
            </nav>
        </WOW>
    )
}

export default Navbar;