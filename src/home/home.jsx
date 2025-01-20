import pressArticles from "./press/press.json"

const robot_filepath = "./robot_images/"
export default function Home() {
  return (
    <div>
      <img 
        src={require(robot_filepath + "robot_white_backdrop.png")} 
        alt={"Cute robot looking to the left against a white backdrop"}
      />
      <h1>Hi! This site is under construction. 🦖 </h1>
      <h2>Press</h2>
      <PressArticles/>
    </div>
  );
}

function PressArticles() {
  return (
    <div className="press-div">
      {
        pressArticles.map((article, index) => (
          <div>
            <ArticleCard article={article}/>
          </div>
        )
      )
      }
    </div>
  )
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
    </div>
  )
}