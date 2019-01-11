import React from 'react';
import './Navbar.css';
import PropTypes from 'prop-types';

const Navbar = ({onNewGame}) => (
    <header>
        <h2>Memory Game</h2>
        <nav >
            <ul>
                <li onClick={onNewGame} > New Game</li>
            </ul>
        </nav>
    </header>
)

Navbar.proptypes = {
    onNewGame: PropTypes.func.isRequired
}

export default Navbar