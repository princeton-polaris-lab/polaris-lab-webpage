import publicationsJson from "../publications/publications.json"
import PublicationCard from "../publications/publication_card.jsx"

import React, { useEffect, useState } from 'react';

const createYearToPublicationMapping = (filteredPublications) => {
    // Create new JS object with each year mapped to all the publications
    // published in that year
    const yearToPublication = []
    for (const publication of filteredPublications) {
        const publicationsOfYear = yearToPublication.find(
            mapping => mapping.year === publication.year);
        console.log(publicationsOfYear)
        // initialize year to publications object if year hasn't yet been displayed
        if (publicationsOfYear === undefined) {
            yearToPublication.push(
                {   
                    year: publication.year,
                    publications: [ publication ]
                }
            );
        } else {
            // add publication to the object with the proper year
            console.log(publicationsOfYear)
            publicationsOfYear["publications"].push(publication);
        }
    }
    return yearToPublication;
}

export default function Publications() {
    const [publications, setPublications] = useState(createYearToPublicationMapping(publicationsJson));
    const [searchTerm, setSearchTerm] = useState('');

    const handleInputChange = (event) => {
        setSearchTerm(event.target.value);
    };

    const filterPublicationsOnSearchTerm = () => {
        const filteredPublications = []
        for (const publication of publicationsJson) {
            if (publication.title.includes(searchTerm) || 
                publication.abstract.includes(searchTerm)) {
                filteredPublications.push(publication);
            }
        }
        return filteredPublications;
    }

    useEffect(() => {
        // @TODO implement search over all fields instead of just title and year
        const filteredPublications = filterPublicationsOnSearchTerm();
        const yearToPublicationMapping = createYearToPublicationMapping(filteredPublications);
        setPublications(yearToPublicationMapping);
    }, [searchTerm]);

    return (
        <div className="page">
            <input 
                type="text" 
                placeholder="Search..." 
                value={searchTerm} 
                onChange={handleInputChange} 
            />
            {publications.map((yearToPublication, index) => (
                <div key={index}>
                    <h1>{yearToPublication.year}</h1>
                    {yearToPublication.publications.map((publicationEntry, pubIndex) => (
                        <PublicationCard
                            key={pubIndex}
                            publicationEntry={publicationEntry}
                        />
                    ))}
                </div>
            ))}
        </div>
    );
}