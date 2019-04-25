/***  development/src/index.js ***/

import React from 'react';
import { render } from 'react-dom';
import LemiComponent from '../../src';
const App = () => (
    <LemiComponent />
);
render(<App />, document.getElementById("container"));