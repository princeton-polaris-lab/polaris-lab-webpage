### Publications
Navigate to app > publications.
#### From Arxiv
Add the identifier of your arxiv paper to `arxiv_publication_ids.txt` and run `update_arxiv_entries_in_publications_json()`. If you're running code in a notebook, make sure that all functions are defined. Your arxiv indentifier should be the last value in the url of your paper: http://arxiv.org/abs/<<i>identifier>.

### Press
Navigate to app > press.

To add new press articles to `press.json`, run `update_press_articles_in_press_json()`. Older entries in the JSON won't be touched, but newer entries will be populated and a thumbnail of the article, if it exists, will be saved into the `press_images` folder. Each entry will point to the relative path of the thumbnail. If an article is unable to be downloaded, a message will print and the user should enter the entry into the JSON file manually.