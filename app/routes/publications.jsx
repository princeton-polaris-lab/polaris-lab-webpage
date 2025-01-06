import publicationsJson from "../publications/publications.json"
import PublicationCard from "../publications/publication_card.jsx"

import React, { useEffect, useState } from 'react';

export default function Publications() {
    const [publications, setPublications] = useState(publicationsJson)
    const [searchTerm, setSearchTerm] = useState('');

    const handleInputChange = (event) => {
        setSearchTerm(event.target.value);
    };

    useEffect(() => {
        const filteredPublications = []
        for (const publication of publicationsJson) {
            if (publication.title.includes(searchTerm) || 
                publication.abstract.includes(searchTerm)) {
                filteredPublications.push(publication)
            }
        }
        setPublications(filteredPublications)
    }, [searchTerm]);

    return (
        <div className="page">
            <input 
                type="text" 
                placeholder="Search..." 
                value={searchTerm} 
                onChange={handleInputChange} 
            />
            { publications.map((publicationEntry, index) => (
                <PublicationCard
                    key={index}
                    publicationEntry={publicationEntry}
                />
            ))}
        </div>
    );
}