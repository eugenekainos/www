import * as React from 'react';
import * as ReactDom from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './app/App';

const Wrapper = () => {
    return (
        <BrowserRouter>
            <App />
        </BrowserRouter>
    );
};

const render = () => {
    ReactDom.render(<Wrapper />, document.getElementById('root'));
};

render();
