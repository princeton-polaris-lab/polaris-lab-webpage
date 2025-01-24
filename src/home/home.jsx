import "./home.css"
const logo_filepath = "./logos/"

export default function Home() {
  return (
    <>
    <div className="headline top-section">
      <div className="headline-top">
          <h2 className="intro-text">
            We're investigating how AI and the law can work together for the benefit of society.
          </h2>
      </div>
    </div>
    <div className="media-section top-section">
      <div className="section-top">
        <h2 className="section-header">You can find our work covered in media and cited by policymakers.</h2>
      </div>
      <div className="section-bottom">
        <a href="https://www.nytimes.com/2023/10/19/technology/guardrails-artificial-intelligence-open-source.html" className="media-logo">
          <img className="logo-owid" alt="NYT Logo" src={require(logo_filepath + "new-york-times-logo.png")}/>
        </a>
        <a href="https://nvlpubs.nist.gov/nistpubs/ai/NIST.AI.800-1.ipd.pdf" className="media-logo">
          <img className="logo-nist" alt="NIST Logo" src={require(logo_filepath + "nist-logo.png")}/>
        </a>
        <a href="https://news.bloomberglaw.com/ip-law/federal-use-of-ai-tools-prompts-researchers-to-build-new-dataset" className="media-logo">
          <img className="logo-bloomberg" alt="Bloomberg Law Logo" src={require(logo_filepath + "bloomberglaw.png")}/>
        </a>
        <a href="https://www.ntia.gov/sites/default/files/publications/ntia-ai-open-model-report.pdf" className="media-logo">
          <img className="logo-ntia" alt="NITA Logo" src={require(logo_filepath + "ntia-logo-wht.svg")}/>
        </a>
        <a href="https://www.wsj.com/articles/researchers-are-developing-tools-to-calculate-ais-carbon-footprint-11594978202?mod=djemAIPro" className="media-logo">
          <img className="logo-wsj" alt="WSJ Logo" src={require(logo_filepath + "wsj-logo.png")}/>
        </a>
      </div>
    </div>
    </>
  );
}
