import "./press.css"

import pressArticles from "./press/press.json"

export default function Press() {
  return (
    <div className="press-page">
      <div className="press-page-header">
        <h1>Press</h1>
        <img className="cute-robot-reading"
                  src={require("./cute_robot_reading.png")}
                  alt={"Cute robot reading a paper"}/>
      </div>
      <div className="press-articles">
        <hr/> 
        {
          pressArticles
            .sort((a, b) => new Date(b.date) - new Date(a.date))
            .map((article) => (
            <>
              <hr/>
              <ArticleCard article={article}/>
              <hr/>
            </>
          )
        )
        }
        <hr/>
    </div>
    </div>
  );
}

const limitTextToNWords = (text, N) => {
  return text.split(/\s+/).slice(0, N).join(" ")
}
function ArticleCard( {article} ) {
  console.log('Article data:', article);
  console.log('Image path:', article.top_image_relative_path);
  
  let imageSrc;
  try {
    imageSrc = require("./press/" + article.top_image_relative_path);
    console.log('Successfully loaded image:', imageSrc);
  } catch (error) {
    console.error('Failed to load image:', error);
    imageSrc = null;
  }

  return (
    <div className="article-card">
      <div className="article-card-content">
        {imageSrc && (
          <img 
            className="article-image"
            src={imageSrc}
            alt={"Top image from press article " + article.title}/>
        )}
        <div className="article-card-text">
          <h2>
            <a href={article.original_url} target="_blank" rel="noreferrer">
              {article.title}
            </a>
          </h2>
          <p className="source">{article.source} &bull; {new Date(article.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
          <p className="preview-text">{limitTextToNWords(article.text, 60) + "..."}</p>
        </div>
      </div>
    </div>
  )
}