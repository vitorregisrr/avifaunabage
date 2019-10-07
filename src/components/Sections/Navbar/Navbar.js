import React from 'react';
import WOW from 'react-wow';
import {Link} from 'react-router-dom';

import './Navbar.scss';

const Navbar = (props) => {

    return (
        <WOW animation="fadeInDown">
            <nav className={`Navbar`}>
                <Link to="/">
                    <h1 className="Navbar__brand">
                        Avifauna Urbana de Bagé/RS
                    </h1>
                </Link>
            </nav>
        </WOW>
    )
}

export default Navbar;