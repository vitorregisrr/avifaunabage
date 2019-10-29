import React, {useEffect} from 'react';
import WOW from 'react-wow';
import {withRouter} from 'react-router-dom';
import qs from 'query-string';
import translatePraca from 'util/pracaTranslator';
import passarosData from 'util/PassarosData.js'
import {animateScroll} from 'react-scroll';

import PassaroThumb from 'components/PassaroThumb/PassaroThumb.js';
import PageHeader from 'components/PageHeader/PageHeader.js';

const ListaPassaros = (props) => {
    useEffect( () => { 
        animateScroll.scrollToTop();
    } , []);

    const pracaCod = qs
        .parse(props.location.search, {ignoreQueryPrefix: true})
        .key;
        
    const pracaNome = translatePraca(pracaCod);

    return (
        <section className="mb-5 mt-1 py-3">
            <WOW animation="zoomIn">
                <PageHeader hasBack={true}>
                    <h2 className="inner-title">
                        <span>aves presenta na</span>
                        {pracaNome}
                    </h2>
                </PageHeader>

                <div className="container">
                    <div className="row">
                        {passarosData
                            .filter(passaro => passaro.pracas.includes(pracaCod))
                            .map(passaro => <div key={passaro.codigo} className="col-sm-6 col-lg-4 col-xl-3 h-100">
                                <PassaroThumb {...passaro}></PassaroThumb>
                            </div>)}
                    </div>
                </div>
            </WOW>
        </section>
    )
}

export default withRouter(ListaPassaros);