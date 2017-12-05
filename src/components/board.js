import React from 'react';

import List from './list';

import './board.css';

export default function Board() {
    return (
        <div className="board">
            <h2>Example board</h2>
            <ul className="lists">
                <li className="list-wrapper">
                  <List />
                </li>
                <li className="list-wrapper">
                  <List />
                </li>
                <li className="list-wrapper">
                  <List />
                </li>
            </ul>
        </div>
    );
}

