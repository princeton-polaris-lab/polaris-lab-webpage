import "./people.css"

import peopleInfo from "./people.json";
import ProfileCard from "./profile_card";

export default function People() {
  return (
    <div className="people-page">
      <h1> People </h1>
      {
        peopleInfo.map((categoryToPeople) => (
          <div className="people-category">
            <hr/><h2>{categoryToPeople.category}</h2><hr/>
            <div className="people-in-category">
              {categoryToPeople.members.map((profile) => (
                <ProfileCard
                  profile={profile}
                />
              ))}
            </div>
          </div>
        ))
      }
    </div>
  )
}
