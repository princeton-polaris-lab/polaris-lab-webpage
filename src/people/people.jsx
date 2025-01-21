import peopleInfo from "./people.json";
import ProfileCard from "./profile_card";

export default function People() {
  return (
    <div className="people-page-div">
      {
        peopleInfo.map((categoryToPeople) => (
          <div>
            {categoryToPeople.category}
            {categoryToPeople.members.map((profile) => (
              <ProfileCard
                profile={profile}
              />
            )
            )}
          </div>
        )
        )
      }
    </div>
  )
}
