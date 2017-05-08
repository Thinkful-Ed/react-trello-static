import React from 'react';

import Card from './card';

import './list.css';

export default function List() {
    return (
        <div className="list">
            <h3>Example list</h3>
            <Card />
            <Card />
            <Card />
        </div>
    );
}
