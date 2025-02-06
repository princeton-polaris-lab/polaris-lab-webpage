import "./publications.css"

import React, { useState } from 'react';

// Hashes a string to a numeric value
function hashString(str) {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    hash = str.charCodeAt(i) + ((hash << 5) - hash);
  }
  return hash;
}

// Returns a color pair (background and text color) for a given tag using a modern pastel palette
function getTagStyle(tag) {
  const tagColorThemes = [
    { background: "#FFECEC", color: "#D64545" }, // Soft Coral
    { background: "#ECF9FF", color: "#247BA0" }, // Soft Sky Blue
    { background: "#ECFFE8", color: "#2E8B57" }, // Soft Mint
    { background: "#F3ECFF", color: "#6B5B95" }, // Soft Lavender
    { background: "#FFFFE0", color: "#FFC107" }, // Soft Yellow
    { background: "#FFF4E6", color: "#FF7F50" }, // Soft Peach
    { background: "#E0F7FA", color: "#00838F" }, // Soft Teal
    { background: "#F9FBE7", color: "#9E9D24" }, // Soft Lime
    { background: "#F0F0FF", color: "#5D5FEF" }, // Soft Indigo
    { background: "#FFE0F7", color: "#C2185B" }  // Soft Magenta
  ];
  const index = Math.abs(hashString(tag)) % tagColorThemes.length;
  return tagColorThemes[index];
}

// TODO auto-expand and text highlighting on search
export default function PublicationCard({ publication }) {
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
                
                {/* Render the tags with a single fixed color */}
                {publication.tags && publication.tags.length > 0 && (
                    <div className="publication-tags">
                        {publication.tags.map((tag, index) => (
                            <span key={index} className="publication-tag">{tag}</span>
                        ))}
                    </div>
                )}
            </div>

        </div>
    );
};