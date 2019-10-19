import React, {useEffect, useState} from 'react';
import WOW from 'react-wow';
import ScrollBooster from 'scrollbooster';

import './DragMap.scss';
import mapaBackground from 'assets/images/backgrounds/mapa-bage.png';
import DragMapItem from './DragMapItem/DragMapItem';

const DragMap = props => {
    const [activePoint,
        setActivePoint] = useState();

    const mapPoints = [
        {
            label: 'Praça Dr.Albano',
            key: 'praca-dr-albano',
            pos: {
                x: 550,
                y: 245
            },
            classNames: 'invertido'
        }, {
            label: 'Praça da Estação',
            key: 'praca-da-estacao',
            pos: {
                x: 490,
                y: 210
            }
        }, {
            label: 'Praça do Calçadão',
            key: 'praca-do-calcadao',
            pos: {
                x: 490,
                y: 280
            }
        }, {
            label: 'Praça do Coreto',
            key: 'praca-do-coreto',
            pos: {
                x: 416,
                y: 285
            }
        }, {
            label: 'Praça as Carretas',
            key: 'praca-das-carretas',
            pos: {
                x: 300,
                y: 300
            }
        }, {
            label: 'Praça Esporte',
            key: 'praca-dos-desportos',
            pos: {
                x: 410,
                y: 210
            }
        }, {
            label: 'Praça Santos Dumont',
            key: 'praca-santos-dumont',
            pos: {
                x: 540,
                y: 80
            }
        }, {
            label: 'Praça Dom Diogo de Souza',
            key: 'praca-dom-diogo',
            pos: {
                x: 450,
                y: 480
            }
        }, {
            label: 'Praça da Catedral',
            key: 'praca-da-catedral',
            pos: {
                x: 440,
                y: 360
            },
            classNames: 'invertido'
        }, {
            label: 'Praça Do Silveira',
            key: 'praca-do-silveira',
            pos: {
                x: 400,
                y: 140
            }
        }
    ];
    
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
              ${ - data.position.y - 40}px
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
                <span className="DragMap__warning">Os pontos são aproximados e podem não condizer com a localidade real.</span>
                <div className="DragMap__content">
                    <img className="DragMap__scene" src={mapaBackground} alt="Mapa de Bagé"/>
                    {mapPoints.map(point =>
                     <DragMapItem
                        setIsActive={() => setActivePoint(point.key)}
                        classNames={`${point.classNames || ''} ${activePoint === point.key ? 'active' : ''}`}
                        label={point.label}
                        pos={point.pos}
                        key={point.key}
                        cod={point.key}></DragMapItem>)}
                </div>
            </div>
        </WOW>
    )
};

export default DragMap;