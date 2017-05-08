import React from 'react';

import './card.css';

export default function Card() {
    const text  = 'Example card';
    return (
        <div className="card">
            {text}
        </div>
    );
};

