import "./home.css"

const robot_filepath = "./robot_images/"
const logo_filepath = "./logos/"
export default function Home() {
  return (
    <>
    <div class="headline top-section">
      <div class="headline-top">
          <h2 class="intro-text">
            We're investigating how AI and the law can work together for the benefit of society.
          </h2>
      </div>
    </div>
    <div class="media-section top-section">
      <div class="section-top">
        <div class="section-miniheader">Coverage</div>
        <h2 class="section-header">You can find our work covered in media and cited by policymakers.</h2>
      </div>
      <div class="section-bottom">
        <a href="https://www.nytimes.com/2023/10/19/technology/guardrails-artificial-intelligence-open-source.html" class="media-logo">
          <img class="logo-owid" src={require(logo_filepath + "new-york-times-logo.png")}/>
        </a>
        <a href="https://nvlpubs.nist.gov/nistpubs/ai/NIST.AI.800-1.ipd.pdf" class="media-logo">
          <img class="logo-nist" src={require(logo_filepath + "nist-logo.png")}/>
        </a>
        <a href="https://news.bloomberglaw.com/ip-law/federal-use-of-ai-tools-prompts-researchers-to-build-new-dataset" class="media-logo">
          <img class="logo-bloomberg" src={require(logo_filepath + "bloomberglaw.png")}/>
        </a>
        <a href="https://www.ntia.gov/sites/default/files/publications/ntia-ai-open-model-report.pdf" class="media-logo">
          <img class="logo-ntia" src={require(logo_filepath + "ntia-logo-wht.svg")}/>
        </a>
        <a href="https://www.wsj.com/articles/researchers-are-developing-tools-to-calculate-ais-carbon-footprint-11594978202?mod=djemAIPro" class="media-logo">
          <img class="logo-wsj" src={require(logo_filepath + "wsj-logo.png")}/>
        </a>
      </div>
    </div>
    </>
  );
}
