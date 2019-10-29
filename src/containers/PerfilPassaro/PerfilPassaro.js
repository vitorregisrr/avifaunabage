import React, {useEffect} from 'react';
import {withRouter, Redirect} from 'react-router-dom';
import WOW from 'react-wow';
import qs from 'query-string';
import {animateScroll} from 'react-scroll';
import passarosData from '../../util/PassarosData.js';

import './PerfilPassaro.scss';
import PageHeader from 'components/PageHeader/PageHeader.js';
import PassaroCaption from './PassaroCaption/PassaroCaption.js';

const PerfilPassaro = (props) => {
    useEffect( () => { 
        animateScroll.scrollToTop();
    } , []);
    
    const passaroKey = qs
        .parse(props.location.search, {ignoreQueryPrefix: true})
        .key;

    const passaro = passarosData.filter(passaro => passaro.codigo === passaroKey)[0];

    return (
        <section className="mb-5 py-3">
            <WOW animation="zoomIn">
                <PageHeader hasBack={true}></PageHeader>
                {passaro
                    ? <div className="container mt-4">
                            <div className="PerfilPassaro">
                                <PassaroCaption passaro={passaro} />
                            </div>
                        </div>
                    : <Redirect to="/"></Redirect>}
            </WOW>
        </section>
    )
}

export default withRouter(PerfilPassaro);