import { Popup } from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

const filePathToProfileImages = "/profile_pictures/"

function ProfilePopup( {profile} ) {
    return (
        <Popup trigger={<button> Trigger</button>} position="right center" modal>
            <div>Popup content here !!</div>
        </Popup>
    )
}

export default function ProfileCard( {profile} ) {
    return (
        <div>
            <img width={250} height={250} alt={"Image of " + profile.name} 
                src={filePathToProfileImages + profile.file} />
            <p>{profile.name}</p>
            <ProfilePopup profile={profile}/>
        </div>
    )
}