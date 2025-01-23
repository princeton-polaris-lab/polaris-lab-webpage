import '../src/styles/base.css';
import '../src/styles/typography.css';
import '../src/styles/variables.css';
import '../src/styles/utilities.css';
import './App.css';

import { Link, Outlet } from "react-router";

function Header() {
    return (
        <div className="header">
           <nav className="header-nav">
                <Link to="/">
                    <img className="home-logo" 
                        src={require("./logo.png")} 
                        alt={"Logo of the AI Law and Society Lab"}/>
                </Link>
                <Link to="/about">About</Link>
                <Link to="/people">People</Link>
                <Link to="/publications">Publications</Link>
                <a href={"https://www.ailawpolicy.com/"} target="_blank" rel="noreferrer">Blog</a>
                {/* <Link to="/contact">Contact</Link> */}
            </nav> 
            <hr/>
        </div>
    )
}

function Footer() {
    return (
        <div>
           <p>Copyright: The AI Law and Society Lab </p>
        </div>
    )
}

export default function App() {
  return (
    <>
        <Header/>
        <Outlet/>
        <Footer/>
    </>
  );
}