import React from 'react';

export default function PublicationCard(props) {
    return (
        <div className="card">
            <h2>{props.publicationEntry.title}</h2>
            <p>{props.publicationEntry.text}</p>
            <p><strong>Authors:</strong> {props.publicationEntry.author.join(', ')}</p>
        </div>
    );
};