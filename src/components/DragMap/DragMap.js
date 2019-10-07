import React, {useEffect} from 'react';
import WOW from 'react-wow';
import ScrollBooster from 'scrollbooster';

import './DragMap.scss';
import mapaBackground from 'assets/images/backgrounds/mapa-bage.png';

const DragMap = props => {

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
                    <img className="DragMap__scene" src={mapaBackground}></img>
                </div>
            </div>
        </WOW>
    )
};

export default DragMap;