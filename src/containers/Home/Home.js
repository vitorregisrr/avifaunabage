import React from 'react';
import DragMap from 'components/DragMap/DragMap';
import WOW from 'react-wow';

import PageHeader from 'components/PageHeader/PageHeader';

const Home = props => {
    return (
        <section className="mb-5 mt-1 py-3">
            <WOW animation="fadeIn">
                <PageHeader>
                    <h2 className="inner-title">
                        Selecione uma praça
                        <span>E descubra suas aves.</span>
                    </h2>
                </PageHeader>

                <div className="container d-flex flex-column align-items-center">
                    <DragMap></DragMap>
                </div>
            </WOW>
        </section>
    )
}

export default Home;