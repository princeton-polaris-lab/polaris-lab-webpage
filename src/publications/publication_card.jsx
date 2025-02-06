import "./publications.css"

import React, { useState } from 'react';

// TODO auto-expand and text highlighting on search
export default function PublicationCard( {publication} ) {
    const [showAbstract, setShowAbstract] = useState(false);

    return (
        <div className="publication-card">

            <div className="publication-text-listing">
                <h3> {publication.title} </h3>
                <p><i>{publication.publication_venue}</i></p>
                <p>{publication.authors.join(', ')}</p>
                <p>            <a href={publication.pdf} target="_blank" rel="noreferrer">[pdf]
                    {/* <img className="cute-robot-button"
                        src={require("./cute_robot_on_rocket_white.png")}
                        alt="Cute robot on a rocket, side view :)" 
                    /> */}
                </a>
                
                {publication.abstract && (
                    <a onClick={() => setShowAbstract(!showAbstract)}>[abstract]</a>
                )}
                {publication.code && (
                    <a href={publication.code} target="_blank" rel="noreferrer">[code]</a>
                )}
                {publication.policy_brief && (
                    <a href={publication.policy_brief} target="_blank" rel="noreferrer">[policy brief]</a>
                )}
                {publication.site && (
                    <a href={publication.site} target="_blank" rel="noreferrer">[project page]</a>
                )}
                
                </p>
                {
                    showAbstract && publication.abstract ? 
                        <p className="abstract-paragraph">
                            <strong>Abstract: </strong>{publication.abstract}
                        </p> : <></>
                }
                {publication.press && (
                    <div className="press-links">
                        <strong>Coverage: </strong>
                            {publication.press.map((item, index) => (
                                <React.Fragment key={index}>
                                    {index > 0 && " · "}
                                    <a href={item.url} target="_blank" rel="noreferrer">{item.outlet}</a>
                                </React.Fragment>
                            ))}
                    </div>
                )}
                {publication.comments && (
                    <div className="comments-section">
                        {/* <strong>Comments: </strong> */}
                        <span dangerouslySetInnerHTML={{ __html: publication.comments }} />
                    </div>
                )}
            </div>

        </div>
    );
};