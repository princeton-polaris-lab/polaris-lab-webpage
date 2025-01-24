import "./contact.css"

import { Link } from "react-router";

export default function Contact() {
  return (
    <div className="contact">
      <h1>Contact</h1>
      <img className="robot-in-front-of-building"
        alt="Cute robot in front of Nassau Hall" 
        src={require("./robot_in_front_of_building.png")}
      />
      <p>
        We are housed within Princeton's 
        <a target="_blank" rel="noreferrer"href="https://citp.princeton.edu/"> Center for Information Technology Policy 
        </a> at 303 Sherrerd Hall, Princeton, NJ 08544.</p>
        <p> Join us at Princeton! Once you've here, let us 
        know <a target="_blank" rel="noreferrer"href="https://www.peterhenderson.co/advising/"> your interest </a>
         in the lab. For media inquiries, please email the  <Link to="/people">author(s)</Link> of 
         the <Link to="/publications">paper(s)</Link> that spark your interest.
      </p>
    </div>
  );
}
