import React, {useEffect} from 'react';
import WOW from 'react-wow';
import ScrollBooster from 'scrollbooster';

import './DragMap.scss';
import mapaBackground from 'assets/images/backgrounds/mapa-bage.png';
import DragMapItem from './DragMapItem/DragMapItem';

const DragMap = props => {

    const mapPoints = [
        {
            label: 'Praça da Estação',
            key: 'praca-da-estacao',
            pos:{
                x: 390,
                y: 290
            }
        },

        {
            label: 'Praça do Coreto',
            key: 'praca-do-coreto',
            pos:{
                x: 366,
                y: 395
            },
            classNames: 'invertido'
        },

        {
            label: 'Praça as Carretas',
            key: 'praca-das-carretas',
            pos:{
                x: 310,
                y: 460
            }
        },

        {
            label: 'Praça Dr.Albano',
            key: 'praca-dr-albano',
            pos:{
                x: 130,
                y: 140
            }
        },

        {
            label: 'Praça Dos Desportos',
            key: 'praca-dos-desportos',
            pos:{
                x: 310,
                y: 200
            }
        },

        {
            label: 'Praça Santos Dumont',
            key: 'praca-santos-dumont',
            pos:{
                x: 540,
                y: 300
            }
        },

        {
            label: 'Praça Dom Diogo de Souza',
            key: 'praca-dom-diogo',
            pos:{
                x: 500,
                y: 200
            }
        },

        {
            label: 'Praça da Catedral',
            key: 'praca-da-catedral',
            pos:{
                x: 200,
                y: 240
            }
        },

        {
            label: 'Praça do Calçadão',
            key: 'praca-do-calcadao',
            pos:{
                x: 100,
                y: 200
            }
        },

        {
            label: 'Praça Do Silveira',
            key: 'praca-do-silveira',
            pos:{
                x: 310,
                y: 200
            }
        },
    ]

    useEffect(() => {
        let viewport = document.querySelector('.DragMap')
        let content = viewport.querySelector('.DragMap__content')
        let scene = viewport.querySelector('.DragMap__scene')

        let sb = new ScrollBooster({
            viewport,
            content,
            emulateScroll: true,
            onUpdate: (data) => {
                content.style.transform = `translate(
              ${ - data.position.x}px,
              ${ - data.position.y}px
            )`
            }
        })

        scene.addEventListener('load', () => {
            // update sizes/metrics after image load
            sb.updateMetrics()

            // set viewport position to the center of an image
            let offsetX = scene.scrollWidth - viewport.offsetWidth
            let offsetY = scene.scrollHeight - viewport.offsetHeight
            sb.setPosition({
                x: offsetX / 2,
                y: offsetY / 2
            })
        });
    }, []);

    return (
        <WOW animation="zoomIn">
            <div className="DragMap">
                <div className="DragMap__content">
                    <img className="DragMap__scene" src={mapaBackground} alt="Mapa de Bagé"/>
                    {mapPoints.map( point => 
                        <DragMapItem classNames={point.classNames || ''} label={point.label} pos={point.pos} key={point.key} cod={point.key}></DragMapItem>)}
                </div>
            </div>
        </WOW>
    )
};

export default DragMap;