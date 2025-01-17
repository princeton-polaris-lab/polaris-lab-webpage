import React, { useState } from 'react';

// now do auto-expand and text highlighting on search; more of a css thing so implement the rest first
export default function PublicationCard( {publication} ) {
    const [showAbstract, setShowAbstract] = useState(false);
    return (
        <div className="card">
            <h2><a href={publication.pdf} target="_blank">{publication.title}</a></h2>
            <p>{publication.text}</p>
            <p><strong>Authors:</strong> {publication.authors.join(', ')}</p>
            <button onClick={() => setShowAbstract(!showAbstract)}> * </button>
            {
                showAbstract ? 
                <>
                    <p>{publication.abstract}</p>
                </> :
                <></>
            }
        </div>
    );
};