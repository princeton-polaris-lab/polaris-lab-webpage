import { useState, useEffect, useCallback } from 'react';
import { Link } from "react-router-dom";
import './carousel.css';
import { useSwipe } from '../utils/swipeHandler';

const logo_filepath = "./logos/";

const carouselItems = [
    {
        title: "We research and develop AI that can work for the public good.",
        description: "And investigate how AI and law can work together toward this vision.",
        type: 'headline',
        buttonText: 'Learn more',
        buttonLink: '/about',
        robotImage: require("./robot_images/polaris_bot.png")
    },
    {
        title: "You can find work by the covered in media and cited by policymakers.",
        type: 'media',
        logos: [
            {
                url: "https://www.nytimes.com/2023/10/19/technology/guardrails-artificial-intelligence-open-source.html",
                img: require(logo_filepath + "new-york-times-logo.png"),
                alt: "NYT Logo",
                className: "logo-owid"
            },
            {
                url: "https://nvlpubs.nist.gov/nistpubs/ai/NIST.AI.800-1.ipd.pdf",
                img: require(logo_filepath + "nist-logo.png"),
                alt: "NIST Logo",
                className: "logo-nist"
            },
            {
                url: "https://news.bloomberglaw.com/ip-law/federal-use-of-ai-tools-prompts-researchers-to-build-new-dataset",
                img: require(logo_filepath + "bloomberglaw.png"),
                alt: "Bloomberg Law Logo",
                className: "logo-bloomberg"
            },
            {
                url: "https://www.ntia.gov/sites/default/files/publications/ntia-ai-open-model-report.pdf",
                img: require(logo_filepath + "ntia-logo-wht.svg"),
                alt: "NTIA Logo",
                className: "logo-ntia"
            },
            {
                url: "https://www.wsj.com/articles/researchers-are-developing-tools-to-calculate-ais-carbon-footprint-11594978202?mod=djemAIPro",
                img: require(logo_filepath + "wsj-logo.png"),
                alt: "WSJ Logo",
                className: "logo-wsj"
            }
        ]
    }
];

const ROTATION_INTERVAL = 32000; // 5 seconds

export default function HomeCarousel() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const rotateSlide = useCallback(() => {
        setCurrentIndex(prev => prev === 0 ? 1 : 0);
    }, []);

    useEffect(() => {
        const interval = setInterval(rotateSlide, ROTATION_INTERVAL);
        return () => clearInterval(interval);
    }, [rotateSlide]);

    const handleCardClick = (index) => {
        if (index !== currentIndex) {
            setCurrentIndex(index);
        }
    };

    // Handle swipe gestures
    const handleNextSlide = () => {
        if (currentIndex < carouselItems.length - 1) {
            setCurrentIndex(currentIndex + 1);
        }
    };

    const handlePrevSlide = () => {
        if (currentIndex > 0) {
            setCurrentIndex(currentIndex - 1);
        }
    };

    const swipeHandlers = useSwipe(handleNextSlide, handlePrevSlide);

    return (
        <div className="carousel-container">
            <div 
                className="carousel-track" 
                style={{
                    transform: `translateX(-${currentIndex * 100}%)`
                }}
                {...swipeHandlers}
            >
                {carouselItems.map((item, index) => (
                    <div 
                        key={index} 
                        className={`carousel-card ${item.type}-section`}
                        onClick={(e) => {
                            if (!e.target.closest('.button')) {
                                handleCardClick(index);
                            }
                        }}
                        style={{ cursor: index !== currentIndex ? 'pointer' : 'default' }}
                    >
                        {item.type === 'headline' ? (
                            <div className="carousel-content">
                                <div className="carousel-text">
                                    <h1>{item.title}</h1>
                                    <p>{item.description}</p>
                                    <Link to={item.buttonLink} className="button">
                                        {item.buttonText}
                                    </Link>
                                </div>
                                <div className="robot-container">
                                    <img 
                                        src={item.robotImage} 
                                        alt="AI Robot"
                                        className="robot-image"
                                    />
                                </div>
                            </div>
                        ) : (
                            <div className="carousel-content media-content">
                            <h2>{item.title}</h2>
                            <div className="logo-grid">
                                {item.logos.map((logo, idx) => (
                                    <a 
                                        key={idx} 
                                        href={logo.url} 
                                        className="media-logo" 
                                        target="_blank" 
                                        rel="noreferrer"
                                    >
                                        <img 
                                            src={logo.img}
                                            alt={logo.alt}
                                        />
                                    </a>
                                ))}
                            </div>
                        </div>
                        )}
                    </div>
                ))}
            </div>
            <div className="carousel-dots">
                {carouselItems.map((_, index) => (
                    <div 
                        key={index}
                        className={`carousel-dot ${index === currentIndex ? 'active' : ''}`}
                        onClick={() => setCurrentIndex(index)}
                    />
                ))}
            </div>
            <div>

        </div>
        </div>

    );
} 