This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

# Custom Scripts

### Publications
Navigate to app > publications.
#### From Arxiv
Add the identifier of your arxiv paper to `arxiv_publication_ids.txt` and run `update_arxiv_entries_in_publications_json()`. If you're running code in a notebook, make sure that all functions are defined. Your arxiv indentifier should be the last value in the url of your paper: http://arxiv.org/abs/<identifier>.

####
You can edit the JSON directly. Created-at and published-at fields do not need to exist. Year, however, is necessary.

### Press
Navigate to app > press.

To add new press articles to `press.json`, run `update_press_articles_in_press_json()`. Older entries in the JSON won't be touched, but newer entries will be populated and a thumbnail of the article, if it exists, will be saved into the `press_images` folder. Each entry will point to the relative path of the thumbnail. If an article is unable to be downloaded, a message will print and the user should enter the entry into the JSON file manually.

### People
Please manually edit app > people > people.json with the appropriate information to add/remove people. 
We will likely need to an an "Alumni" grouping at a certain point in time.
