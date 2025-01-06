import publications from "../publications/publications.json"
import PublicationCard from "../publications/publication_card.jsx"

export default function Publications() {

    return (
        <div className="page">
            { publications.map((publication, index) => (
                <PublicationCard
                    key={index}
                    title={publication.title}
                    text={publication.pdf}
                    authors={publication.author}
                />
            ))}
        </div>
    );
}