import peopleInfo from "./people.json";
import ProfileCard from "./profile_card";

export default function People() {
  return (
    <div>
      {
        peopleInfo.map((categoryToPeople, index) => (
          <div>
            {categoryToPeople.category}
            {categoryToPeople.members.map((profile, index) => (
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
