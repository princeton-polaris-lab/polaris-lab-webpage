import pressArticles from "../press/press.json"

const robot_filepath = "./robot_images/"
export default function Home() {
  return (
    <div>
      <img 
        src={require(robot_filepath + "robot_white_backdrop.png")} 
        alt={"Cute robot looking to the left against a white backdrop"}
      />
      <h1>Hi! This site is under construction. 🦖 </h1>
    </div>
  );
}