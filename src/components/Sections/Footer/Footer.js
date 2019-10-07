import React from 'react';

import './Footer.scss';
import logoEvolve from 'assets/images/brands/evolve-white.png';

const Footer = (props) => {
    return (
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
    )
}

export default Footer;