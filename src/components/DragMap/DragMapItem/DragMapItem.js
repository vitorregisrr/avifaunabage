import React, {useState, Fragment} from 'react';
import {Link} from 'react-router-dom';
import Media from 'react-media';

import './DragMapItem.scss';

const DragMapItem = props => {

    return (
        <Media
            queries={{
            medium: "(max-width: 1199px)",
            large: "(min-width: 1200px)"
        }}>
            {matches => (
                <Fragment>
                    {matches.medium
                        ? <div
                                className={`DragMap__item ${props.classNames} ${props.isActive ? 'active' : ''}`}
                                onClick={props.setIsActive}
                                style={{
                                top: props.pos.y,
                                left: props.pos.x
                            }}>
                                <div className={`DragMap__item marker`}>
                                    <Link to={`/praca?key=${props.cod}`} className={`DragMap__item-more`}>
                                        Ver mais
                                    </Link>
                                    <div className="DragMap__item-icon"></div>
                                    <div className="DragMap__item-box orange">
                                        {props.label}
                                    </div>
                                </div>
                            </div>
                        : (
                            <Link
                                to={`/praca?key=${props.cod}`}
                                className={`DragMap__item ${props.classNames}`}
                                style={{
                                top: props.pos.y,
                                left: props.pos.x
                            }}>
                                <div className={`DragMap__item marker ${props.isActive}`}>
                                    <div className="DragMap__item-icon"></div>
                                    <div className="DragMap__item-box orange">
                                        {props.label}
                                    </div>
                                </div>
                            </Link>
                        )}
                </Fragment>
            )}
        </Media>
    )
};

export default DragMapItem;