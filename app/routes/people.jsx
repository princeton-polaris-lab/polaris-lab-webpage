import peopleInfo from "../people/people.json";
import ProfileCard from "../people/profile_card";

export default function Home() {
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
