import React from 'react';
import WOW from 'react-wow';

import './Footer.scss';
import logoEvolve from 'assets/images/brands/evolve-white.png';

const Footer = (props) => {
    return (
        <WOW animation="fadeInUp" offset="100">
            <footer className="Footer wow fadeInUp">
                <div className="container">
                    <div className="Footer__copyright">
                        <span>powered with &lt;3 by</span>
                        <a href="https://evolveme.com.br" target="_blank" rel="noopener noreferrer">
                            <img src={logoEvolve} alt="Logo Evolve Studio"/>
                        </a>
                    </div>
                </div>
            </footer>
        </WOW>
    )
}

export default Footer;