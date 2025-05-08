import "./blog.css";
import { Link } from "react-router-dom";

export default function Blog() {
  return (
    <div className="blog">
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        paddingTop: '2rem'
      }}>
        
      </div>

      <div className="blog-section">
        
        <h1 style={{
          fontFamily: 'var(--font-family)',
          textAlign: 'center',
          fontSize: '4rem',
          lineHeight: '1.2',
          maxWidth: '1000px',
          margin: '0 auto 4rem'
        }}>
          Insights from Our Lab
        </h1>
      </div>

      <div className="blog-content" style={{maxWidth: '800px', margin: '0 auto', padding: '0 2rem'}}>
        <div className="blog-list">
          <div className="blog-post">
            <h2>
              <Link to="/about">
                About Us
              </Link>
            </h2>
            <p className="blog-date">March 15, 2024</p>
            <p className="blog-excerpt">
              Learn more about our mission and our team.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
} 