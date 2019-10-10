import React from 'react';
import WOW from 'react-wow';
import {Link} from 'react-router-dom';

import './DragMapItem.scss';

const DragMapItem = props => {
    return (
        <WOW animation="fadeInUp" offset={100}>
            <Link
                to={`/praca?key=${props.cod}`}
                className={`DragMap__item ${props.classNames}`}
                style={{
                top: props.pos.y,
                left: props.pos.x
            }}>

                <div className="DragMap__item-label">
                    {props.label}
                </div>
                <div className="DragMap__item-bullet"></div>

            </Link>
        </WOW>
    )
};

export default DragMapItem;