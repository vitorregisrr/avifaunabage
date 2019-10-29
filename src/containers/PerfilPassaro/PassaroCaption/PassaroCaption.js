import React from 'react';
import { Scrollbars } from 'react-custom-scrollbars';
import pracasTranslator from 'util/pracaTranslator';

import AudioButton from 'components/AudioButton/AudioButton';
import SpeechButton from 'components/SpeechButton/SpeechButton';
import LibrasButton from 'components/LibrasButton/LibrasButton';

const PassaroCaption = props => {
    return (
        <React.Fragment>
            <div className="PerfilPassaro__img">
                <img
                    src={require(`assets/images/birds/${props.passaro.codigo}.jpg`)}
                    alt={`Passáro ${props.passaro.nome}`}/>
            </div>
            <div className="PerfilPassaro__caption">
                <AudioButton classNames="PerfilPassaro__play" src={`${props.passaro.codigo}.mp3`}></AudioButton>
                <div className="PerfilPassaro__acessb">
                    <LibrasButton className="PerfilPassaro__acessb-item libras" codigo={props.passaro.codigo}></LibrasButton>
                    <SpeechButton classNames="PerfilPassaro__acessb-item locucao" 
                    text={`
                        Apelido: ${props.passaro.apelido}. 
                        Nome Científico: ${props.passaro.nomeCientifico}. 
                        Grau de segurança: Pouco Preocupante.
                        Ordem: ${props.passaro.ordem}.
                        Familía: ${props.passaro.familia}.
                        Habitat: ${props.passaro.habitat}.
                        Alimentação: ${props.passaro.alimentacao}.
                        Aparência: ${props.passaro.aparencia}`}></SpeechButton>
                </div>
                
                <h1 className="PerfilPassaro__apelido">
                    {props.passaro.apelido}
                </h1>
                <small className="PerfilPassaro__nome-cientifico">
                    {props.passaro.nomeCientifico}
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
                        <div className="row">
                            <div className="col-12 mb-3">
                                <h5 className="title d-block">
                                    Grau de segurança:
                                </h5>
                                <img
                                    className="PerfilPassaro__grau-seguranca"
                                    src={require(`assets/images/ico/grafico-extincao.png`)}
                                    alt={`Gráfico de nível de extinção`}
                                    title="Pouco preocupante"/>
                            </div>
                            <div className="col-6 mb-3">
                                <h5 className="title">
                                    Ordem:
                                </h5>
                                {props.passaro.ordem}
                            </div>
                            <div className="col-6 mb-3">
                                <h5 className="title">
                                    Família:
                                </h5>
                                {props.passaro.familia}
                            </div>
                            <div className="col-12 mb-3">
                                <h5 className="title d-block">
                                    Como é:
                                </h5>
                                {props.passaro.aparencia}
                            </div>
                            <div className="col-12 mb-3">
                                <h5 className="title d-block">
                                    Seu Habitat:
                                </h5>
                                {props.passaro.habitat}
                            </div>

                            <div className="col-12 mb-3">
                                <h5 className="title d-block">
                                    O que come:
                                </h5>
                                {props.passaro.alimentacao}
                            </div>

                            <div className="col-12 mb-3">
                                <h5 className="title d-block">
                                    Onde encontrar:
                                </h5>
                                {props
                                    .passaro
                                    .pracas
                                    .map((praca, i) => <span>{pracasTranslator(praca)}{i !== props.passaro.pracas.length - 1
                                            ? ', '
                                            : '.'}
                                    </span>)}
                            </div>
                        </div>
                    </div>
                </Scrollbars>
            </div>
        </React.Fragment>
    )
}

export default PassaroCaption;