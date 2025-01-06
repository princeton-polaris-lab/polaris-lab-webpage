import React from 'react';

export default function PublicationCard(props) {
    return (
        <div className="card">
            <h2>{props.title}</h2>
            <p>{props.text}</p>
            <p><strong>Authors:</strong> {props.authors.join(', ')}</p>
        </div>
    );
};