import React from 'react';

import List from './list';

import './board.css';

export default function Board() {
    return (
        <div className="board">
            <h2>Example board</h2>
            <div className="lists">
                <List />
                <List />
                <List />
            </div>
        </div>
    );
}

