import "./people.css"

import peopleInfo from "./people.json";
import ProfileCard from "./profile_card";

export default function People() {
  // Flatten the array of people from all categories
  const alumni = peopleInfo.flatMap(category => category.members).filter(profile => profile.alumni);
  const allPeople = peopleInfo.flatMap(category => category.members).filter(profile => !profile.alumni);

  return (
    <div className="people-page">
      <div className="people-header">
        <h1> Current Members </h1>
        <img className="robot-friends-image" src={require("./robot-friends.png")}/>
      </div>
      <div className="people-in-category">
        {allPeople.map((profile) => (
          <ProfileCard
            profile={profile}
          />
        ))}
        </div> 
      {alumni.length > 0 && (
        <div className="people-page">
          <div className="people-header">
            <h1> Alumni </h1>
          </div>
          <div className="people-in-category">
            {alumni.map((profile) => (
              <ProfileCard
                profile={profile}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

