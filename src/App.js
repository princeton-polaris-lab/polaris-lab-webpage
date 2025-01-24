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
                <ul><Link to="/">
                    <img className="home-logo" 
                        src={require("./logo.png")} 
                        alt={"Logo of the AI Law and Society Lab"}/>
                </Link></ul>
                <ul><Link to="/people">People</Link></ul>
                <ul><Link to="/publications">Publications</Link></ul>
                <ul><Link to="/press">Press</Link></ul>
                <ul><Link to="/about">About</Link></ul>
                <ul><a href={"https://www.ailawpolicy.com/"} target="_blank" rel="noreferrer">Blog</a></ul>
            </nav> 
            <hr/>
        </div>
    )
}

function Footer() {
    return (
        <div className="footer">
            <hr/>
            <p>The AI Law and Society Lab &copy; 2024</p>
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