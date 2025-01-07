
const filePathToProfileImages = "/profile_pictures/"
export default function ProfileCard( {profile} ) {
    return (
        <div>
            <img src={filePathToProfileImages + profile.file} />
            <p>{profile.name}</p>
        </div>
    )
}