import "./people.css"

import peopleInfo from "./people.json";
import ProfileCard from "./profile_card";

export default function People() {
  // Flatten the array of people from all categories
  const allPeople = peopleInfo.flatMap(category => category.members);

  return (
    <div className="people-page">
      <div className="people-header">
        <h1> People </h1>
        <img className="robot-friends-image" src={require("./robot-friends.png")}/>
      </div>
      <div className="people-in-category">
        {allPeople.map((profile) => (
          <ProfileCard
            profile={profile}
          />
        ))}
      </div>
    </div>
  )
}
