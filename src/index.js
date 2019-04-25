/*** src/index.js   ***/

import React from 'react';
import './assets/style.css';
import Home from './components/home';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel';

class Lemi extends React.Component {
    render() {
        return <Home />
    }
}
export default Lemi;