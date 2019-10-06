import React from 'react';
import {NavLink} from 'react-router-dom';
import {animateScroll} from "react-scroll";

const NavbarItem = (props) => {

    const scrollWithDelay = (name, offset) => {
        setTimeout(() => {
           animateScroll.scrollToTop();
        }, 300);
    };

    return (
        <li>
            <NavLink
                to={props.routeTo}
                onClick={() => scrollWithDelay(props.scrollTo, props.offset)}
                className={`Navbar__links__item`}>
            </NavLink>
        </li>
    )
}

export default NavbarItem;