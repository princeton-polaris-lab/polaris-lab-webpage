import "./about.css"

import { Link } from "react-router-dom";

export default function About() {
  return (
    <div className="about">
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        paddingTop: '2rem'
      }}>
        <img 
          src={require("../logo.png")}
          alt="POLARIS Lab Logo"
          style={{
            width: '200px',
            height: 'auto'
          }}
        />
      </div>

      <div className="mission-section">
        <h4 style={{
          textTransform: 'uppercase',
          color: '#666',
          textAlign: 'center',
          paddingTop: '2rem',
          fontWeight: 'normal',
          marginBottom: '1rem',
          fontSize: '1.5rem'
        }}>Our Mission</h4>
        
        <h1 style={{
          fontFamily: 'var(--font-family)',
          textAlign: 'center',
          fontSize: '4rem',
          lineHeight: '1.2',
          maxWidth: '1000px',
          margin: '0 auto 4rem'
        }}>
          Making AI that works for the public good
        </h1>
      </div>

      <div className="about-content" style={{maxWidth: '800px', margin: '0 auto', padding: '0 2rem'}}>
        <p style={{fontSize: '1.2rem', lineHeight: '1.6', color: '#666', marginBottom: '2rem'}}>
          We are the Princeton Language+Law, Artificial Intelligence, & Society Lab (POLARIS Lab). 
          Through interdisciplinary research at the intersection of AI and law,
          we work to ensure AI technologies serve the public good.
        </p>


        <div className="mission-section">
          <h3 style={{
            textTransform: 'uppercase',
            textAlign: 'center',
            paddingTop: '2rem',
            fontWeight: 'normal',
            marginBottom: '1rem',
            fontSize: '2rem'
          }}>Vision</h3>

        </div>

        <p style={{fontSize: '1.2rem', lineHeight: '1.6', color: '#666'}}>
          In 2012, Kiri Wagstaff presented a paper at ICML titled <a href="https://arxiv.org/pdf/1206.4656">Machine Learning that Matters</a>, something that we built on with our work on <a href="https://arxiv.org/abs/1709.06560">Deep Reinforcement Learning that Matters</a>. These works outline a vision for AI research that focuses and steers toward positive societal impact. Our work is guided by this vision. To that end, while we develop core methodology in sequential decision-making and natural language processing, we also strive to ensure that our work has real-world impact. To do so, we blend an interdisciplinary approach, both contributing to AI, but also to research on law and society that helps shape AI deployments and a positive future for the world.
        </p>


        <div className="mission-section">
          <h3 style={{
            textTransform: 'uppercase',
            textAlign: 'center',
            paddingTop: '2rem',
            fontWeight: 'normal',
            marginBottom: '1rem',
            fontSize: '2rem'
          }}>Impact</h3>

        </div>

        <p style={{fontSize: '1.2rem', lineHeight: '1.6', color: '#666'}}>
        The POLARIS lab focuses on real-world impact, and as a result, our work has regularly received popular press coverage in the <a href="https://www.nytimes.com/2023/10/19/technology/guardrails-artificial-intelligence-open-source.html">New York Times</a>, <a href="https://www.washingtonpost.com/technology/2024/03/05/ai-research-letter-openai-meta-midjourney/">Washington Post</a>, <a href="https://www.wsj.com/articles/researchers-are-developing-tools-to-calculate-ais-carbon-footprint-11594978202">Wall Street Journal</a>, and <a href="https://www.science.org/doi/10.1126/science.359.6377.725">Science</a>.</p>

        <p style={{fontSize: '1.2rem', lineHeight: '1.6', color: '#666'}}>

          We've helped policymaking efforts in various ways. Our work on AI safety and governance has been cited and used by <a href="https://nvlpubs.nist.gov/nistpubs/ai/NIST.AI.800-1.ipd.pdf">National Institute of Standards and Technology</a>, <a href="https://www.ntia.gov/sites/default/files/publications/ntia-ai-open-model-report.pdf">National Telecommunications and Information Administration</a> (NTIA), <a href="https://vimeo.com/event/3784739">National Artificial Intelligence Advisory Committee (NAIAC)</a>, <a href="https://www.copyright.gov/1201/2024/USCO-letters/Letter%20from%20Department%20of%20Justice%20Criminal%20Division.pdf">Department of Justice</a>,  <a href="https://arxiv.org/abs/2204.11910">Internal Revenue Service</a>, <a href="https://reglab.github.io/racialcovenants/">Santa Clara County</a>, and <a href="https://www.markey.senate.gov/news/press-releases/markey-heinrich-eshoo-beyer-introduce-legislation-to-investigate-measure-environmental-impacts-of-artificial-intelligence">legislators</a>. 
          </p>
          
          <p style={{fontSize: '1.2rem', lineHeight: '1.6', color: '#666'}}>
          Companies, like OpenAI, have <a href="https://openai.com/index/gpt-4v-system-card/">adopted</a> our recommendations to improve the safety of their systems. And top AI conferences have adopted our recommendations for <a href="https://neuripsconf.medium.com/introducing-the-neurips-2021-paper-checklist-3220d6df500b">reproducibility standards</a> and environmental impact reporting.
          </p>
          <br/>
          <br/>
              
        <div style={{
          background: '#f5f5f7',
          padding: '2rem',
          borderRadius: '1rem',
          marginBottom: '4rem'
        }}>
          <h2 style={{marginBottom: '2rem'}}>Our Location</h2>
          <img className="robot-in-front-of-building"
            alt="Cute robot in front of Nassau Hall" 
            src={require("./robot_in_front_of_building.png")}
            style={{
              width: "100%",
              height: "auto",
              borderRadius: '0.5rem',
              marginBottom: '1.5rem'
            }}
          />
          <p style={{fontSize: '1.1rem', lineHeight: '1.6'}}>
            We are housed within Princeton's 
            <a target="_blank" rel="noreferrer" href="https://citp.princeton.edu/"> Center for Information Technology Policy</a> 
            at 303 Sherrerd Hall, Princeton, NJ 08544.
          </p>
          <p style={{fontSize: '1.1rem', lineHeight: '1.6'}}>
            Join us at Princeton! Once you're here, let us know 
            <a target="_blank" rel="noreferrer" href="https://www.peterhenderson.co/advising/"> your interest</a> in 
            the lab. For media inquiries, please email peter (dot) henderson (at) princeton (dot) edu.
          </p>
        </div>
      </div>
    </div>
  );
}
