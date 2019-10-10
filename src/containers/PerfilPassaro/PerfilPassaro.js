import React from 'react';
import WOW from 'react-wow';
import {withRouter, Redirect} from 'react-router-dom';
import qs from 'query-string';
import {Scrollbars} from 'react-custom-scrollbars';
import passarosData from '../../util/PassarosData.js'
import pracasTranslator from '../../util/pracaTranslator.js'

import './PerfilPassaro.scss';
import PageHeader from 'components/PageHeader/PageHeader.js';

const PerfilPassaro = (props) => {
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
                                <div className="PerfilPassaro__img">
                                    <img
                                        src={require(`assets/images/birds/${passaro.codigo}.jpg`)}
                                        alt={`Passáro ${passaro.nome}`}/>
                                </div>

                                <div className="PerfilPassaro__caption">
                                    <button className="PerfilPassaro__play">
                                    </button>

                                    <h1 className="PerfilPassaro__apelido">
                                        {passaro.apelido}
                                    </h1>
                                    <small className="PerfilPassaro__nome-cientifico">
                                        {passaro.nomeCientifico}
                                    </small>

                                    <Scrollbars
                                        renderTrackHorizontal={props => <div
                                        {...props}
                                        className="track-horizontal"
                                        style={{
                                        display: "none"
                                    }}/>}
                                        renderThumbHorizontal={props => <div
                                        {...props}
                                        className="thumb-horizontal"
                                        style={{
                                        display: "none"
                                    }}/>}
                                        style={{
                                        width: '100%',
                                        height: '75%',
                                        overflowX: 'hidden'
                                    }}>

                                        <div className="PerfilPassaro__content">

                                            <div className="PerfilPassaro__grau-seguranca lc"></div>

                                            <div className="row">
                                                <div className="col-6 mb-3">
                                                    <h5 className="title">
                                                        Ordem:
                                                    </h5>
                                                    {passaro.ordem}
                                                </div>
                                                <div className="col-6 mb-3">
                                                    <h5 className="title">
                                                        Família:
                                                    </h5>
                                                    {passaro.familia}
                                                </div>
                                                <div className="col-12 mb-3">
                                                    <h5 className="title d-block">
                                                        Como é:
                                                    </h5>
                                                    {passaro.aparencia}
                                                </div>
                                                <div className="col-12 mb-3">
                                                    <h5 className="title d-block">
                                                        Seu Habitat:
                                                    </h5>
                                                    {passaro.habitat}
                                                </div>

                                                <div className="col-12 mb-3">
                                                    <h5 className="title d-block">
                                                        O que come:
                                                    </h5>
                                                    {passaro.alimentacao}
                                                </div>

                                                <div className="col-12 mb-3">
                                                    <h5 className="title d-block">
                                                        Onde encontrar:
                                                    </h5>
                                                    {passaro
                                                        .pracas
                                                        .map((praca, i) => 
                                                            <span>{pracasTranslator(praca)}
                                                            {i !== passaro.pracas.length -1
                                                                ? ', '
                                                                : '.'}
                                                        </span>)}
                                                </div>
                                            </div>
                                        </div>
                                    </Scrollbars>
                                </div>
                            </div>
                        </div>
                    : ''}
            </WOW>
        </section>
    )
}

export default withRouter(PerfilPassaro);