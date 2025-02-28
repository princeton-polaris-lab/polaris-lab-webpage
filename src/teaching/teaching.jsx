import "./teaching.css";
import { useState } from 'react';
import { Link } from "react-router-dom";
import { useSwipe } from '../utils/swipeHandler';

const courses = [
    {
        title: "COS 598A: AI Safety & Alignment",
        description: "What safety risks do modern AI systems and methods pose? How can we mitigate these risks and ensure that AI systems are safe and aligned with the intention of their builder? What is currently being done to ensure that AI systems are safe? Are current safeguards sufficient? If not, how can we improve upon them? These are the questions we consider in this advanced seminar. Topics include algorithms and optimization-based methods for alignment (including reinforcement learning), sociotechnical AI safety, accountability and governance, among others. Class will generally be a short lecture (or guest lecture) followed by debates.",
        image: require("./course_images/da113242-14df-4074-96b6-545b0a6b3495.png"),
        link: "https://ai-law-society-lab.github.io/ai-safety-course/"
    },
{
    title: "SPI 352/COS 352: Artificial Intelligence, Law, & Public Policy",
    description: "This course examines the implications of artificial intelligence (AI), particularly foundation models, for law and public policy. We will cover how AI affects and reshapes legal doctrine and policy, including: intellectual property law, administrative law, anti-discrimination law, and more. Also covered will be emerging regulatory policies and legislative efforts around AI, as well as the limits of proposed approaches. Emphasis will be placed juxtaposing the legal and policy considerations with technical design decisions, in an interdisciplinary and accessible way. This course is suitable for students of all backgrounds; no technical knowledge is assumed.",
    image: require("./course_images/f82502cb-bf11-43cf-95a0-06bff430221f.png"),
    link: "https://ai-law-society-lab.github.io/ailaw/"
}
];

export default function Teaching() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextCourse = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % courses.length);
    };

    const prevCourse = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + courses.length) % courses.length);
    };

    const handleDotClick = (index) => {
        setCurrentIndex(index);
    };

    // Add swipe handlers
    const swipeHandlers = useSwipe(nextCourse, prevCourse);

    return (
        <div className="teaching-page">
            <h1>Teaching</h1>
            <div className="carousel-container">
                <div 
                    className="carousel-track" 
                    style={{ transform: `translateX(-${currentIndex * 85}%)` }}
                    {...swipeHandlers}
                >
                    {courses.map((course, index) => (
                        <div className="course-card" key={index}>
                            <img src={course.image} alt={course.title} className="course-image" />
                            <div className="overlay">
                                <h2>{course.title}</h2>
                                <p>{course.description}</p>
                                <Link to={course.link} className="button">Learn More</Link>
                            </div>
                        </div>
                    ))}
                </div>
                <button className="carousel-nav prev" onClick={prevCourse}>{"<"}</button>
                <button className="carousel-nav next" onClick={nextCourse}>{">"}</button>
                <div className="carousel-dots">
                    {courses.map((_, index) => (
                        <div 
                            key={index}
                            className={`carousel-dot ${index === currentIndex ? 'active' : ''}`}
                            onClick={() => handleDotClick(index)}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
} 