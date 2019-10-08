import React from 'react';
import WOW from 'react-wow';
import {withRouter} from 'react-router-dom';

import './PageHeader.scss';

const PageHeader = props => {
    return (
        <WOW animation="fadeInUp">
            <div className="PageHeader pt-4 pb-1">
                <div className="container">
                    {props.hasBack
                        ? <button className="PageHeader__back" onClick={props.history.goBack}/>
                        : ''
                    }
                    {props.children}
                </div>
            </div>
        </WOW>
    )
}

export default withRouter(PageHeader);