from scholarly import scholarly
import json
from datetime import datetime

def make_publication_dictionary(pub):
    """
    Creates publication dictionary from Google Scholar publication data
    @param pub: Filled scholarly publication object
    @return publication_dictionary: formatted dictionary in expected JSON format
    """
    # Get the best available URL (prefer conference/journal links over preprints)
    pdf_url = None
    if 'pub_url' in pub:
        pdf_url = pub['pub_url']
    elif 'eprint_url' in pub:
        pdf_url = pub['eprint_url']
    else:
        # If no URL available, create a Google Scholar link
        pdf_url = f"https://scholar.google.com/citations?view_op=view_citation&citation_for_view={pub['author_pub_id']}"
    
    # Format the publication date (default to year if full date not available)
    pub_date = f"{pub.get('pub_year', '')}-01-01T00:00:00Z"
    
    publication_dictionary = {
        "title": pub['bib'].get('title', ''),
        "pdf": pdf_url,
        "authors": [author.strip() for author in pub['bib'].get('author', '').split(' and ')],
        "year": str(pub.get('pub_year', '')),
        "abstract": pub.get('bib', {}).get('abstract', ''),
        "published": pub_date,
        "updated": pub_date,
        "publication_venue": pub['bib'].get('venue', ''),
        "code": "",
        "site": "",
        "comments": ""
    }
    return publication_dictionary

def update_publications_json(scholar_id):
    """
    Updates publications.json with new entries from Google Scholar
    @param scholar_id: Google Scholar ID
    """
    print("Fetching publications from Google Scholar profile...")
    
    # Get the author's profile and publications
    author = scholarly.search_author_id(scholar_id)
    scholarly.fill(author, sections=['publications'])
    
    # Load existing publications
    try:
        with open('publications.json', 'r') as f:
            publications = json.load(f)
    except (FileNotFoundError, json.JSONDecodeError):
        publications = []
    
    # Get existing titles (for deduplication)
    existing_titles = {pub['title'].lower() for pub in publications}
    
    # Add new publications
    added_count = 0
    for pub in author['publications']:
        # import pdb; pdb.set_trace()
        try:
            scholarly.fill(pub)
            title = pub['bib'].get('title', '').lower()
            print(pub)
            
            if title and title not in existing_titles:
                pub_dict = make_publication_dictionary(pub)
                publications.append(pub_dict)
                existing_titles.add(title)
                added_count += 1
                print(f"Added: {pub_dict['title']}")
        except Exception as e:
            print(f"Error processing publication: {str(e)}")
    
    # Save updated publications
    if added_count > 0:
        with open('publications.json', 'w') as f:
            json.dump(publications, f, indent=4)
        print(f"\nAdded {added_count} new publications to publications.json")
    else:
        print("\nNo new publications to add")

def main():
    # Peter Henderson's Google Scholar ID
    scholar_id = 'dy_JBs0AAAAJ'
    update_publications_json(scholar_id)

if __name__ == "__main__":
    main()