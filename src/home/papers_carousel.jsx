import { useState, useEffect, useCallback } from 'react';
import './carousel.css';
import publicationsJson from '../publications/publications.json';

const PAPERS_TO_SHOW = 3;
const AUTO_SCROLL_INTERVAL = 5000;
const logo_filepath = require.context("./paperimages/", false);

const gradients = [
  { start: '#FF6B6B', end: '#4ECDC4' },
  { start: '#A8E6CF', end: '#3498DB' },
  { start: '#FFD93D', end: '#FF6B6B' },
  { start: '#6C5CE7', end: '#a8e6cf' },
  { start: '#81ecec', end: '#6c5ce7' }
];

export default function PapersCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [papers] = useState(publicationsJson.slice(0, 10));

  const nextSlide = useCallback(() => {
    setCurrentIndex(current => {
      const maxIndex = papers.length - PAPERS_TO_SHOW;
      return current >= maxIndex ? maxIndex : current + 1;
    });
  }, [papers.length]);

  const prevSlide = useCallback(() => {
    setCurrentIndex(current => current <= 0 ? 0 : current - 1);
  }, [papers.length]);

  // Remove or comment out this useEffect
  /*
  useEffect(() => {
    const interval = setInterval(nextSlide, AUTO_SCROLL_INTERVAL);
    return () => clearInterval(interval);
  }, [nextSlide]);
  */

  const getTag = (paper) => {
    const currentYear = new Date().getFullYear();
    if (new Date(paper.published).getFullYear() === currentYear) {
      return "New Paper";
    }
    if (paper.comments?.includes("Spotlight")) {
      return "Featured";
    }
    return "Research";
  };

  return (
    <div className="papers-carousel">
      <div className="papers-header">
        <h2>Recent Research</h2>
        <div className="papers-nav-container">
          <button 
            className="papers-nav prev" 
            onClick={prevSlide}
            disabled={currentIndex === 0}
          >
            <svg viewBox="0 0 24 24">
              <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"/>
            </svg>
          </button>
          <button 
            className="papers-nav next" 
            onClick={nextSlide}
            disabled={currentIndex === papers.length - PAPERS_TO_SHOW}
          >
            <svg viewBox="0 0 24 24">
              <path d="M8.59 16.59L10 18l6-6-6-6-1.41 1.41L13.17 12z"/>
            </svg>
          </button>
        </div>
      </div>
      
      <div className="papers-track" style={{
        transform: `translateX(-${currentIndex * (100 / PAPERS_TO_SHOW)}%)`
      }}>
        {papers.filter(paper => paper.image).map((paper, index) => (
          <a 
            href={paper.pdf}
            target="_blank"
            rel="noreferrer"
            key={index}
            className="paper-card"
            style={{ 
              backgroundImage: `url(${logo_filepath(`./${paper.image}`)})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
          >
            <div className="paper-content">
              <span className="paper-tag">{getTag(paper)}</span>
              <h3 className="paper-title">{paper.title}</h3>
              <p className="paper-authors">
                {paper.authors.slice(0, 3).join(', ')}
                {paper.authors.length > 3 ? ', et al.' : ''}
              </p>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
} 