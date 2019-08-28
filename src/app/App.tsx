import * as React from 'react';
import { Route, Switch } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import { Gallery } from './components/Gallery/Gallery';
import { Contact } from './components/Contact/Contact';
import { Navigation } from './components/Navigation/Navigation';
import { Apartments } from './components/Apartments/Apartments';
import { Bathrooms } from './components/Bathrooms/Bathrooms';
import '../styles/main.scss';
import { ProjectManager } from './components/Project/Project';

const styles = require('./App.scss');

const App = () => {
    return (
        <div className={styles.container}>
            <Header />
            <Navigation />
            <Switch>
                <Route exact path="/apartments" component={Apartments} />
                <Route exact path="/bathrooms" component={Bathrooms} />
                <Route exact path="/contact" component={Contact} />
                <Route exact path="/project/:id" component={ProjectManager} />
                <Route exact path="/" component={Gallery} />
                <Route component={Gallery} />
            </Switch>
            <Footer />
        </div>
    );
};

export default App;
