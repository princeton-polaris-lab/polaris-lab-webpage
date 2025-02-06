import '../src/styles/base.css';
import '../src/styles/typography.css';
import '../src/styles/variables.css';
import '../src/styles/utilities.css';
import './App.css';

import { Link, Outlet } from "react-router-dom";

function Header() {
    return (
        <div className="header">
            <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=DM+Mono:300,300italic,regular,italic,500,500italic%7CDM+Sans:regular,italic,500,500italic,700,700italic&amp;subset=latin,latin-ext,latin,latin-ext" media="all"></link>
           <nav className="header-nav">
                <Link to="/">
                    <img className="home-logo" 
                        src={require("./logo.png")} 
                        alt={"Logo of the AI Law and Society Lab"}/>
                </Link>
                <ul>
                    <li><Link to="/publications">Publications</Link></li>
                    <li><Link to="/people">People</Link></li>
                    <li><Link to="/press">Press</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><a href={"https://www.ailawpolicy.com/"} target="_blank" rel="noreferrer">Blog</a></li>
                </ul>
            </nav> 
        </div>
    )
}

function Footer() {
    return (
        <div className="footer">
            <p>The AI Law and Society Lab &copy; {new Date().getFullYear()}</p>
        </div>
    )
}

export default function App() {
  return (
    <div className='App'>
        <Header/>
        <Outlet/>
        <Footer/>
    </div>
  );
}