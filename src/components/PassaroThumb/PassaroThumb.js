import React from 'react';
import {Link} from 'react-router-dom';

import './PassaroThumb.scss';

const PassaroThumb = props => {
    return (
        <article className="PassaroThumb">
            <div className="PassaroThumb__img">
                <Link to={`/passaro?key=${props.codigo}`}>
                    <img src={require(`assets/images/birds/${props.codigo}.jpg`)} alt={`Passáro ${props.nome}`}/>
                </Link>
            </div>
            <div className="PassaroThumb__caption">
                <h3 className="PassaroThumb__apelido">
                    {props.apelido}
                </h3>
                <small className="PassaroThumb__nome-cientifico">
                    {props.nomeCientifico}
                </small>
                <Link className="PassaroThumb__more" to={`/passaro?key=${props.codigo}`}>
                    ver mais >>
                </Link>
            </div>
        </article>
    )
}

export default PassaroThumb;