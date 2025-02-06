import "./people.css"

import Modal from 'react-modal';
import React, { useState } from 'react';
import modalCustomStyle from './profile_modal_style.json'

Modal.setAppElement('#root');

function ProfilePicture( {profile, profile_component} ) {
    return (
        <img className={profile_component + '-image'} alt={"Image of " + profile.name} 
                    src={require("./profile_pictures/" + profile.file)} />
    )
}

function ProfilePopup( {profile, setIsModalOpen} ) {
    const profile_component = "profile-popup"
    return (
        <div className={profile_component}>
            <ProfilePicture 
                profile={profile} 
                profile_component={profile_component}
            />
            <div className={profile_component + "-text"}>
                <h3> 
                    {profile.name}, {profile.title} 
                </h3>
                <p> {profile.bio} </p>
                <a href={profile.website} target="_blank" rel="noreferrer">
                    <img className="cute-robot-waving-image"
                        src={require("./cute_robot_waving.png")}
                        alt="Cute robot waving at you :)" 
                    />
                </a>
            </div>
            <button className="exit-modal-button" onClick={() => setIsModalOpen(false)}>x</button>
        </div>
    )
}

function ProfileGlimpse( {profile, setIsModalOpen} ) {
    const profile_component = "profile-glimpse"
    return (
        <div className={profile_component}>
            <button onClick={() => window.open(profile.website, '_blank')}>
                <ProfilePicture 
                    profile={profile} 
                    profile_component={profile_component}
                />
                <h3>{profile.name}</h3>
                <div className="title">{profile.title}</div>
            </button>
        </div>
    )
}

export default function ProfileCard( {profile} ) {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <div>
            <ProfileGlimpse 
                profile={profile} 
                setIsModalOpen={setIsModalOpen}
            />
            
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