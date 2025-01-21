import "./people.css"

import Modal from 'react-modal';
import React, { useState } from 'react';
import modalCustomStyle from './profile_modal_style.json'

// Modal.setAppElement('#root'); @TODO Find proper app element for accessibility

function ProfilePicture( {profile} ) {
    return (
        <img className='profile-image' alt={"Image of " + profile.name} 
                    src={require("./profile_pictures/" + profile.file)} />
    )
}

function ProfilePopup( {profile, setIsModalOpen} ) {
    return (
        <div>
            <button onClick={() => setIsModalOpen(false)}>Close</button>
            <ProfilePicture profile={profile}/>
            <h1> 
                <a href={profile.website} target="_blank" rel="noreferrer">
                    {profile.name}, {profile.title} 
                </a>
            </h1>
            <p> {profile.bio} </p>
        </div>
    )
}

function ProfileGlimpse( {profile} ) {
    return (
        <div className="profile-glimpse">
            <ProfilePicture profile={profile}/>
            <h3>{profile.name}</h3>
        </div>
    )
}

export default function ProfileCard( {profile} ) {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <div>
            {/* <button onClick={() => setIsModalOpen(true)}> */}
                <ProfileGlimpse profile={profile}/>
            {/* </button> */}
            <Modal
                isOpen={isModalOpen}
                style={modalCustomStyle}
                onRequestClose={() => setIsModalOpen(false)}
                contentLabel="Example Modal"
            >
                <ProfilePopup profile={profile} setIsModalOpen={setIsModalOpen}/>
            </Modal>
        </div>
    )
}