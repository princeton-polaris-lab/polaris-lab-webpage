import '../src/styles/base.css';
import '../src/styles/typography.css';
import '../src/styles/variables.css';
import '../src/styles/utilities.css';
import './App.css';

import { Link, Outlet } from "react-router-dom";
import { useState, useEffect } from 'react';

// Updated ChevronDownIcon now accepts a 'flipped' prop to rotate the arrow.
const ChevronDownIcon = ({ flipped }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width="18" 
    height="18" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round"
    className="glue-icon glue-icon--18px"
    style={{ transform: flipped ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.3s ease' }}
  >
    <path d="m6 9 6 6 6-6"/>
  </svg>
);

const MenuIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="hamburger-icon"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M4 6h16M4 12h16m-16 6h16"
    />
  </svg>
);

/* 
   ResourcesExpandedHeader:
   This component now displays only the list of items (with titles and descriptions)
   in the style of the original GDM page. The "View All" section has been removed.
*/
function ResourcesExpandedHeader({ open, content, closeExpandedHeader }) {
  return (
    <nav
      aria-label="Resources"
      className={`gdm-header__dropdown ${open ? 'open' : ''}`}
      data-toggle-href="/resources/"
      tabIndex="-1"
    >
      <div className="gdm-header__dropdown-inner beautiful-resources">
        <ul className="glue-header__list">
          {content.items.map((item) => (
            <li key={item.title} className="glue-header__item beautiful-item">
              <Link
                className="glue-header__link"
                to={item.path}
                onClick={closeExpandedHeader}
              >
                <span className="gdm-header__link-inner">
                  <strong className="gdm-header__title">{item.title}</strong>
                  {item.description && (
                    <span className="gdm-header__description">
                      {item.description}
                    </span>
                  )}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

/* 
   Header:
   Renders the main header with primary navigation items.
   - The Resources item uses an expanded panel styled like the original GDM page,
     now without a View All link.
   - About, People, and Press are plain links.
   - A mobile hamburger menu is provided.
*/
function Header() {
  const [expandedHeader, setExpandedHeader] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileView, setIsMobileView] = useState(false);

  // Check if we're on a mobile device
  useEffect(() => {
    const checkMobile = () => {
      setIsMobileView(window.innerWidth <= 768);
    };
    
    // Initial check
    checkMobile();
    
    // Add event listener for window resize
    window.addEventListener('resize', checkMobile);
    
    // Clean up
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      const nav = document.querySelector('.nav');
      if (nav && !nav.contains(event.target) && (isMobileMenuOpen || expandedHeader)) {
        setIsMobileMenuOpen(false);
        setExpandedHeader(null);
      }
    };

    document.addEventListener('touchstart', handleClickOutside);
    document.addEventListener('mousedown', handleClickOutside);
    
    return () => {
      document.removeEventListener('touchstart', handleClickOutside);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isMobileMenuOpen, expandedHeader]);

  const navItems = [
    // {
    //   title: "Resources",
    //   expanded: true,
    //   expandedContent: {
    //     // Only the list of items is now used.
    //     items: [
    //       {
    //         title: "Teaching",
    //         description: "Educational materials and courses",
    //         path: "/teaching/",
    //       },
    //       {
    //         title: "Datasets",
    //         description: "Data sets for research and analysis",
    //         path: "/datasets/",
    //       },
    //       {
    //         title: "Publications",
    //         description: "Academic papers and research reports",
    //         path: "/publications/",
    //       },
    //     ],
    //   },
    // },
    { title: "Publications", path: "/publications" },
    { title: "Teaching", path: "/teaching" },
    // { title: "Datasets", path: "/datasets" },
    { title: "People", path: "/people" },
    { title: "Press", path: "/press" },
    { title: "Newsletter", path: "https://substack.com/@ailawpolicy", external: true },
    { title: "Blog", path: "/blog" },
    { title: "AI Law Tracker", path: "/ai-law-tracker.html", external: true },
    { title: "About", path: "/about" }
  ];

  const toggleExpandedHeader = (item) => {
    if (item.expanded) {
      setExpandedHeader(expandedHeader === item.title ? null : item.title);
      setIsMobileMenuOpen(false);
    } else {
      setExpandedHeader(null);
      setIsMobileMenuOpen(false);
    }
  };

  // Updated toggleMobileMenu: one click will close both mobile menu and expanded header.
  const toggleMobileMenu = () => {
    if (isMobileMenuOpen || expandedHeader) {
      setIsMobileMenuOpen(false);
      setExpandedHeader(null);
    } else {
      setIsMobileMenuOpen(true);
    }
  };

  const handleNavItemClick = () => {
    setExpandedHeader(null);
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="header">
      <div className="header-container">
        <nav className="nav">
          <Link to="/" className="logo">
            <img src={require("./logo.png")} alt="Logo" />
          </Link>
          <button 
            className="mobile-menu-button" 
            onClick={toggleMobileMenu}
            aria-label="Toggle menu"
            aria-expanded={isMobileMenuOpen}
          >
            <MenuIcon />
          </button>
          <div className={`nav-items ${isMobileMenuOpen ? 'open' : ''}`}>
            {navItems.map((item) => (
              <div key={item.title} className="nav-item">
                {item.expanded ? (
                  <button
                    onClick={() => toggleExpandedHeader(item)}
                    className="nav-button"
                    aria-expanded={expandedHeader === item.title}
                    aria-haspopup="true"
                  >
                    {item.title}
                    <ChevronDownIcon flipped={expandedHeader === item.title} />
                  </button>
                ) : (
                  item.external ? (
                    <a
                      href={item.path}
                      className="nav-link"
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={handleNavItemClick}
                    >
                      {item.title}
                    </a>
                  ) : (
                    <Link
                      to={item.path}
                      className="nav-link"
                      onClick={handleNavItemClick}
                    >
                      {item.title}
                    </Link>
                  )
                )}
              </div>
            ))}
          </div>
        </nav>
      </div>
      {/* Always render the Resources dropdown; its visibility is controlled via the "open" prop */}
      {/* <ResourcesExpandedHeader
          open={expandedHeader === "Resources"}
          content={
            navItems.find((item) => item.title === "Resources")
              .expandedContent
          }
          closeExpandedHeader={() => setExpandedHeader(null)}
      /> */}
    </header>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <p>POLARIS Lab; Peter Henderson &copy; {new Date().getFullYear()}</p>
    </footer>
  );
}

export default function App() {
  return (
    <div className="App">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}