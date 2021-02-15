import React from 'react';
import ReactDOM from 'react-dom';

function Example() {
    return ( <
        h1 > I 'm an example component!</h1>
    );
}

export default Example;

if (document.getElementById('component-example')) {
    ReactDOM.render( < Example / > , document.getElementById('component-example'))
};