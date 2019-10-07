import React, {useEffect} from 'react';
import {withRouter} from 'react-router-dom';
import qs from 'query-string';
import passaros from './PassarosData.js'
import PassaroThumb from 'components/PassaroThumb/PassaroThumb.js';

const ListaPassaros = (props) => {
    
    useEffect( () => {
        const filter = qs.parse(this.props.location.search, { ignoreQueryPrefix: true }).praca;
        alert(filter);
    }, []);

    return (
        <section>
            <div className="container">
                <div className="row">
                     {passaros.filter(passaro => passaro.pracas.includes('')).map( passaro => 
                        <PassaroThumb {...passaro}></PassaroThumb>
                     )}
                </div>
            </div>
        </section>
    )
}

export default withRouter(ListaPassaros);