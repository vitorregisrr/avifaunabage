import React from 'react';
import DragMap from 'components/DragMap/DragMap';
import WOW from 'react-wow';

const Home = (props) => {
    return (
        <section>
            <div className="container mb-5 mt-1 py-3 d-flex flex-column align-items-center">
                <div className="pt-4 pb-1">
                    <WOW animation="fadeInUp">
                    <h2 className="inner-title">
                        Selecione uma praça
                        <span>E descubra suas aves.</span>
                    </h2>
                    </WOW>
                </div>
                <DragMap></DragMap>
            </div>
        </section>
    )
}

export default Home;