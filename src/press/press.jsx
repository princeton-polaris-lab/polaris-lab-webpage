import "./press.css"

import pressArticles from "./press/press.json"

export default function Press() {
  return (
    <div className="press-page">
      <h1>Press</h1>
      <div className="press-articles">
      {
        pressArticles.map((article) => (
          <div>
            <ArticleCard article={article}/>
          </div>
        )
      )
      }
    </div>
    </div>
  );
}

const limitTextToNWords = (text, N) => {
  return text.split(/\s+/).slice(0, N).join(" ")
}

function ArticleCard( {article} ) {
  return (
    <div className="article-card">
      <hr/>
      <div className="article-card-content">
        <img 
          className="article-image"
          src={require("./press/" + article.top_image_relative_path)}
          alt={"Top image from press article " + article.title}/>
        <div>
          <h2> {article.title} </h2>
          <p> {limitTextToNWords(article.text, 60) + "..."} </p>
        </div>
        <a href={article.original_url} target="_blank" rel="noreferrer">
                <img className="cute-robot-button"
                src={require("./cute_robot_on_rocket_white.png")}
                alt={"Cute robot on rocket right side view"}/>
        </a>
      </div>
      <hr/>
    </div>
  )
}