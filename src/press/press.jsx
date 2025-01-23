import pressArticles from "./press/press.json"

export default function Press() {
  return (
    <div className="press">
      <h2>Press</h2>
      <PressArticles/>
    </div>
  );
}

function PressArticles() {
  return (
    <div className="press-div">
      {
        pressArticles.map((article) => (
          <div>
            <ArticleCard article={article}/>
          </div>
        )
      )
      }
    </div>
  )
}

const limitTextToNWords = (text, N) => {
  return text.split(/\s+/).slice(0, N).join(" ")
}

function ArticleCard( {article} ) {
  return (
    <div className="article-card">
      <h2> 
        <a href={article.original_url} target="_blank" rel="noreferrer">
          {article.title}
        </a>
      </h2>
      <img 
        width={"auto"}
        height={250}
        src={require("./press/" + article.top_image_relative_path)}
        alt={"Top image from press article " + article.title}/>
      <p> {limitTextToNWords(article.text, 100) + "..."} </p>
    </div>
  )
}