import { Link, Outlet } from "react-router";

function Header() {
    return (
        <div>
           <nav>
                <Link to="/">Home</Link>
                <a href={"https://www.ailawpolicy.com/"} target="_blank" rel="noreferrer">Blog</a>
                {/* <Link to="/about">About</Link> */}
                <Link to="/people">People</Link>
                <Link to="/publications">Publications</Link>
                <Link to="/contact">Contact</Link>
            </nav> 
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