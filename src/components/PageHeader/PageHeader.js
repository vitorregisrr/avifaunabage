import React from 'react';
import WOW from 'react-wow';
import {withRouter} from 'react-router-dom';
import {animateScroll} from 'react-scroll';

import './PageHeader.scss';

const PageHeader = props => {
    const goBack = () => {
        props.history.goBack();

        setTimeout(() => animateScroll.scrollToTop(), 100)
    }
    return (
        <WOW animation="fadeInUp">
            <div className="PageHeader pt-4 pb-1">
                <div className="container">
                    {props.hasBack
                        ? <button className="PageHeader__back" onClick={goBack}/>
                        : ''
                    }
                    {props.children}
                </div>
            </div>
        </WOW>
    )
}

export default withRouter(PageHeader);