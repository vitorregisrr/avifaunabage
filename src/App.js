import React, {Suspense} from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import {CSSTransition} from 'react-transition-group';
import WOW from 'react-wow';

import './App.scss';
import 'assets/scss/util/__CSSTransitions.scss';

// Import HOCS
import Layout from 'hoc/Layout/Layout'

// Import Components
import Spinner from 'components/UI/Spinner/Spinner';

// Import Containers (Pages)
const Home = React.lazy(() => import ('containers/Home/Home'));
const ListaPassaros = React.lazy(() => import ('containers/ListaPassaros/ListaPassaros'));
const PerfilPassaro = React.lazy(() => import ('containers/PerfilPassaro/PerfilPassaro'));

const App = () => {
    const routes = [
        {
            path: '/',
            name: 'Home',
            Component: Home,
            exact: true
        }, {
            path: '/passaros',
            name: 'ListaPassaros',
            Component: ListaPassaros,
            exact: false
        }, {
            path: '/passaro',
            name: 'PerfilPassaro',
            Component: PerfilPassaro,
            exact: false
        }
    ];

    return (
        <BrowserRouter basename="/">

            <Layout>
                {routes.map(({path, Component, name, exact}) => (
                    <Route key={name} exact={exact} path={path}>
                        {({match}) => (
                            <CSSTransition
                                in={match != null}
                                timeout={300}
                                classNames="CSSTransition--fade"
                                unmountOnExit>
                                <div className="page">
                                    <Suspense fallback={< Spinner fullscreen />}>
                                        <Component/>
                                    </Suspense>
                                </div>
                            </CSSTransition>
                        )}
                    </Route>
                ))}
            </Layout>

        </BrowserRouter>
    );
}

export default App;
