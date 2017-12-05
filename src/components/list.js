import React from 'react';

import Card from './card';

export default function List() {
    return (
        <div>
            <h3>Example list</h3>
            <ul className="list">
              <li>
                <Card />
              </li>
              <li>
                <Card />
              </li>
              <li>
                <Card />
              </li>
            </ul>
        </div>
    );
}
