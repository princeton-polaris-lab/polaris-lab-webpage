import "./publications.css"

import React, { useState } from 'react';

export default function PublicationCard( {publication} ) {
    const [showAbstract, setShowAbstract] = useState(false);

    return (
        <div className="publication-card">
            <button 
                className="abstract-expansion-button"
                onClick={() => setShowAbstract(!showAbstract)}> 
                { showAbstract ? <>&and;<br/>&and;<br/>&and;</> : <>&or;<br/>&or;<br/>&or;</> }
            </button>
            <div className="publication-text-listing">
                <h3> {publication.title} </h3>
                <p><i>{publication.publication_venue}</i></p>
                <p>{publication.authors.join(', ')}</p>
                {
                    showAbstract ? 
                        <p className="abstract-paragraph">
                            <strong>Abstract: </strong>{publication.abstract}
                        </p> : <></>
                }
            </div>
            <a href={publication.pdf} target="_blank" rel="noreferrer">
                    <img className="cute-robot-button"
                        src={require("./cute_robot_on_rocket_white.png")}
                        alt="Cute robot on a rocket, side view :)" 
                    />
            </a>
        </div>
    );
};