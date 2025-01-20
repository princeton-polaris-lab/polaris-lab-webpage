import Modal from 'react-modal';
import React, { useState } from 'react';
import modalCustomStyle from './profile_modal_style.json'

// Modal.setAppElement('#root'); @TODO Find proper app element for accessibility

const filePathToProfileImages = "/profile_pictures/"

function ProfilePopup( {profile, setIsModalOpen} ) {
    return (
        <div>
            <button onClick={() => setIsModalOpen(false)}>Close</button>
            <img width={250} height={250} alt={"Image of " + profile.name} 
                    src={filePathToProfileImages + profile.file} />
            <h1> 
                <a href={profile.website} target="_blank">
                    {profile.name}, {profile.title} 
                </a>
            </h1>
            <p> {profile.bio} </p>
        </div>
    )
}

function ProfileGlimpse( {profile} ) {
    return (
        <div id="profile">
            <img width={250} height={250} alt={"Image of " + profile.name} 
                    src={filePathToProfileImages + profile.file} />
            <p>{profile.name}</p>
        </div>
    )
}

export default function ProfileCard( {profile} ) {
    const [isModalOpen, setIsModalOpen] = useState(false);
    
    function afterOpenModal() {
        console.log("opennned")
    }

    return (
        <div>
            <button onClick={() => setIsModalOpen(true)}>
                <ProfileGlimpse profile={profile}/>
            </button>
            <Modal
                isOpen={isModalOpen}
                onAfterOpen={afterOpenModal}
                style={modalCustomStyle}
                onRequestClose={() => setIsModalOpen(false)}
                contentLabel="Example Modal"
            >
                <ProfilePopup profile={profile} setIsModalOpen={setIsModalOpen}/>
            </Modal>
        </div>
    )
}