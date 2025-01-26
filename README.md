## Overview
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app). It follows a simple React App file directory: all files I've created are in `src`. With the exception of `style`, every subdirectory in `src` corresponds to a site page. `index.js` holds all of the routing logic and `App.js` provides the main scaffolding infrastructure of the app.

### Changing/Updating Site Information
The app is dynamic in the sense that `press`, `people`, and `publications` pretty displays the corresponding  JSON files in each directory. So, if you need to add a press article, a publication, or a person, it's a simple matter of manually editing each JSON file. The coding logic doesn't need to be touched and will auto-map the new information on the page in the same style. This holds too for adding a new category to `people` (i.e. "Alumni," "Visiting Students," or "Undergraduate Students"); just add a category and a list of people and the page will auto-expand. 

The search feature on the `publications` page dynamically remaps publications to their publication year, so publications just need to be listed. Currently, the only fields needed to be filled for `publications` are "title," "author," "publication_venue", and "year." The "published" and "updated" fields are nice but unnecessary.

For the rest of the pages, please edit the JSX files directly to change text/images.

### Running the App Locally
`npm start` runs the app in the development mode at [http://localhost:3000](http://localhost:3000). Saving any app files will auto-reload the page. Certain lint errors will appear in the console.

### Deployment
The `node.js.yml` CI/CD script in `.github/workflows` compiles the main branch to an `index.html` file in the `gh-pages` branch and redeploys it to the URL configured in the Pages tab in the Github Project settings. The script is triggered on any new pushes to main.

## Data Scraping Scripts for Publications and Press
To make updating press and publication easier, there are two python scripts that'll perform some automated data scraping to populate their respective JSON files.

### Publications
Navigate to app > publications.
#### From Arxiv
Add the identifier of your arxiv paper to `arxiv_publication_ids.txt` and run `update_arxiv_entries_in_publications_json()`. If you're running code in a notebook, make sure that all functions are defined. Your arxiv indentifier should be the last value in the url of your paper: http://arxiv.org/abs/<identifier>.

### Press
Navigate to app > press.
To add new press articles to `press.json`, add the link of the article you want to collect to `articles.txt` and run `update_press_articles_in_press_json()`. Older entries in the JSON won't be touched, but newer entries will be populated and a thumbnail of the article, if it exists, will be saved into the `press_images` folder. Each entry will point to the relative path of the thumbnail. If an article is unable to be downloaded, a message will print and the user should enter the entry into the JSON file manually.

## Future Work
To dos can be found [here](https://docs.google.com/document/d/1AfWG20Vwd2Mq2N-6r0QvGoROkd7u2r3Z8f3ARX_dO4g/edit?usp=sharing); the original design specs of the webpage are found on the first tab of the same document. Note: you need a Princeton University Address to access the document.