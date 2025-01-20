import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import { PassThrough } from "node:stream";
import { createReadableStreamFromReadable } from "@react-router/node";
import { ServerRouter, useParams, useLoaderData, useActionData, useMatches, useRouteError, Meta, Links, ScrollRestoration, Scripts, Outlet, isRouteErrorResponse, Link } from "react-router";
import { isbot } from "isbot";
import { renderToPipeableStream } from "react-dom/server";
import { createElement, useState, useEffect } from "react";
import Modal from "react-modal";
const streamTimeout = 5e3;
function handleRequest(request, responseStatusCode, responseHeaders, routerContext, loadContext) {
  return new Promise((resolve, reject) => {
    let shellRendered = false;
    let userAgent = request.headers.get("user-agent");
    let readyOption = userAgent && isbot(userAgent) || routerContext.isSpaMode ? "onAllReady" : "onShellReady";
    const { pipe, abort } = renderToPipeableStream(
      /* @__PURE__ */ jsx(ServerRouter, { context: routerContext, url: request.url }),
      {
        [readyOption]() {
          shellRendered = true;
          const body = new PassThrough();
          const stream = createReadableStreamFromReadable(body);
          responseHeaders.set("Content-Type", "text/html");
          resolve(
            new Response(stream, {
              headers: responseHeaders,
              status: responseStatusCode
            })
          );
          pipe(body);
        },
        onShellError(error) {
          reject(error);
        },
        onError(error) {
          responseStatusCode = 500;
          if (shellRendered) {
            console.error(error);
          }
        }
      }
    );
    setTimeout(abort, streamTimeout + 1e3);
  });
}
const entryServer = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: handleRequest,
  streamTimeout
}, Symbol.toStringTag, { value: "Module" }));
function withComponentProps(Component) {
  return function Wrapped() {
    const props = {
      params: useParams(),
      loaderData: useLoaderData(),
      actionData: useActionData(),
      matches: useMatches()
    };
    return createElement(Component, props);
  };
}
function withErrorBoundaryProps(ErrorBoundary3) {
  return function Wrapped() {
    const props = {
      params: useParams(),
      loaderData: useLoaderData(),
      actionData: useActionData(),
      error: useRouteError()
    };
    return createElement(ErrorBoundary3, props);
  };
}
const stylesheet = "/assets/app-BmO3rm-F.css";
const links = () => [{
  rel: "preconnect",
  href: "https://fonts.googleapis.com"
}, {
  rel: "preconnect",
  href: "https://fonts.gstatic.com",
  crossOrigin: "anonymous"
}, {
  rel: "stylesheet",
  href: "https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap"
}, {
  rel: "stylesheet",
  href: stylesheet
}];
function Layout({
  children
}) {
  return /* @__PURE__ */ jsxs("html", {
    lang: "en",
    children: [/* @__PURE__ */ jsxs("head", {
      children: [/* @__PURE__ */ jsx("meta", {
        charSet: "utf-8"
      }), /* @__PURE__ */ jsx("meta", {
        name: "viewport",
        content: "width=device-width, initial-scale=1"
      }), /* @__PURE__ */ jsx(Meta, {}), /* @__PURE__ */ jsx(Links, {})]
    }), /* @__PURE__ */ jsxs("body", {
      children: [children, /* @__PURE__ */ jsx(ScrollRestoration, {}), /* @__PURE__ */ jsx(Scripts, {})]
    })]
  });
}
const root = withComponentProps(function App() {
  return /* @__PURE__ */ jsx(Outlet, {});
});
const ErrorBoundary = withErrorBoundaryProps(function ErrorBoundary2({
  error
}) {
  let message = "Oops!";
  let details = "An unexpected error occurred.";
  let stack;
  if (isRouteErrorResponse(error)) {
    message = error.status === 404 ? "404" : "Error";
    details = error.status === 404 ? "The requested page could not be found." : error.statusText || details;
  }
  return /* @__PURE__ */ jsxs("main", {
    className: "pt-16 p-4 container mx-auto",
    children: [/* @__PURE__ */ jsx("h1", {
      children: message
    }), /* @__PURE__ */ jsx("p", {
      children: details
    }), stack]
  });
});
const route0 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  ErrorBoundary,
  Layout,
  default: root,
  links
}, Symbol.toStringTag, { value: "Module" }));
function Header() {
  return /* @__PURE__ */ jsx("div", {
    children: /* @__PURE__ */ jsxs("nav", {
      children: [/* @__PURE__ */ jsx(Link, {
        to: "/",
        children: "Home"
      }), /* @__PURE__ */ jsx(Link, {
        to: "/about",
        children: "About"
      }), /* @__PURE__ */ jsx(Link, {
        to: "/people",
        children: "People"
      }), /* @__PURE__ */ jsx(Link, {
        to: "/publications",
        children: "Publications"
      }), /* @__PURE__ */ jsx(Link, {
        to: "/contact",
        children: "Contact"
      })]
    })
  });
}
function Footer() {
  return /* @__PURE__ */ jsx("div", {
    children: /* @__PURE__ */ jsx("p", {
      children: "Copyright: The AI Law and Society Lab "
    })
  });
}
const scaffolding = withComponentProps(function Scaffolding() {
  return /* @__PURE__ */ jsxs(Fragment, {
    children: [/* @__PURE__ */ jsx(Header, {}), /* @__PURE__ */ jsx(Outlet, {}), /* @__PURE__ */ jsx(Footer, {})]
  });
});
const route1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: scaffolding
}, Symbol.toStringTag, { value: "Module" }));
const home = withComponentProps(function Home() {
  return /* @__PURE__ */ jsx("div", {
    children: /* @__PURE__ */ jsx("h1", {
      children: "Look ma!"
    })
  });
});
const route2 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: home
}, Symbol.toStringTag, { value: "Module" }));
const about = withComponentProps(function About() {
  return /* @__PURE__ */ jsx("p", {
    children: "hi?"
  });
});
const route3 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: about
}, Symbol.toStringTag, { value: "Module" }));
const peopleInfo = [
  {
    category: "Faculty",
    members: [
      {
        name: "Peter Henderson",
        file: "peter_henderson.jpg",
        title: "Principal Investigator",
        bio: "I'm an Assistant Professor at Princeton University with appointments in the Department of Computer Science and the School of Public and International Affairs. I'm also affiliated with the Center for Information Technology Policy (CITP), Princeton Language and Intelligence Initiative (PLI), Center for Statistics and Machine Learning (CSML), and Program in Law & Public Policy (PLAW) at Princeton.",
        website: "https://www.peterhenderson.co/"
      }
    ]
  },
  {
    category: "Postdoctoral Researchers",
    members: [
      {
        name: "Inyoung Cheong",
        file: "inyoung_cheong.jpg",
        title: "Postdoctoral Research Associate",
        bio: "I'm a postdoctoral researcher at the Princeton Center for Information Technology Policy, working with Peter Henderson, and an Affiliate Faculty member at the University of Washington School of Law, where I was fortunate to learn from Tadayoshi Kohno, Ryan Calo, and Amy X. Zhang. My research focuses on the social impacts of emerging AI technologies and developing socio-technical mitigations. Aligned with Kaminski & Jones' perspective, I view fundamental legal principles as actively shaping technology's meaning, not just reactively catching up to it.",
        website: "https://inyoungcheong.github.io/"
      },
      {
        name: "Dominik Stammbach",
        file: "dominik_stammbach.jpg",
        title: "Postdoctoral Research Associate",
        bio: "I am a postdoctoral research associate at the CITP at Princeton University. I am currently working on legal NLP with Peter Henderson. Prior to that, I obtained my Dr. Sc. in Spring 2024 at ETH Zurich for my thesis about data-centric automated fact checking where I was supervised by Elliott Ash and Mrinmaya Sachan.",
        website: "https://dominik-stammbach.github.io/"
      }
    ]
  },
  {
    category: "Ph.D. Students",
    members: [
      {
        name: "Luxi (Lucy) He",
        file: "luxi_he.jpg",
        title: "Ph.D. Student",
        bio: "Hi! I'm Luxi He (feel free to call me Lucy). I'm a second-year CS Ph.D. student at Princeton University, where I'm fortunate to be co-advised by Prof. Danqi Chen and Prof. Peter Henderson. My current research focuses on understanding language models and improving their alignment and safety. I'm particularly interested in the impact of data in the language model life cycle, as well as safe deployment of models. Recently, I've also been exploring multimodal topics. Motivated by real-world impact and my hope to bridge the gap between tech and policy, I want to bring in insights from both technical and policy/law sides to my research.",
        website: "https://lumos23.github.io/"
      },
      {
        name: "Patty Liu",
        file: "patty_liu.jpg",
        title: "Ph.D. Student",
        bio: "Hello! I'm Patty, a final year Engineering Science student at the University of Toronto. I am interested in trustworthy machine learning and machine learning applications in healthcare.",
        website: "http://pattyliu.com/"
      },
      {
        name: "Sijia Liu",
        file: "sijia_liu.jpg",
        title: "Ph.D. Student",
        bio: "Hello! I am a 1st year CS PhD at Princeton University working with Peter Henderson. Before that, I worked as a research scientist in Amazon Foundation Model (Amazon AGI) Post-Training team with Dr. Yang Liu and Prof. Dilek Hakkani-Tur in Sunnyvale, CA. Previously, I did my Bachelors at Peking University and then did my Masters at Carnegie Mellon University.",
        website: "https://sijial430.github.io/"
      },
      {
        name: "Kincaid MacDonald",
        file: "kincaid_macdonald.jpg",
        title: "Ph.D. Student",
        bio: "'Lo, there! I'm Kincaid MacDonald, a devotee of math, music, and mountains — with an intense interest in the nature of thinking itself. (What is reason, and how is it possible?) I'm especially intrigued by the rapidly developing space of tools for thought, as well as the possibility of tools that think. (Are these the same?)",
        website: "https://www.kincaid.ink/"
      },
      {
        name: "Xiangyu Qi",
        file: "xiangyu_qi.jpg",
        title: "Ph.D. Student",
        bio: "I am a fourth-year Ph.D. candidate in the Department of Electrical and Computer Engineering at Princeton University, where I am advised by Prof. Prateek Mittal and Prof. Peter Henderson. I am currently working on Machine Learning Safety, Security, and Alignment, and I am funded by the Princeton Gordon Y.S. Wu Fellowship and an OpenAI Superalignment Grant.",
        website: "https://xiangyuqi.com/"
      },
      {
        name: "Boyi Wei",
        file: "boyi_wei.jpg",
        title: "Ph.D. Student",
        bio: "I am a PhD student in the Department of Electrical and Computer Engineering at Princeton University, advised by Prof. Peter Henderson. Before coming to Princeton, I completed my undergraduate degree in University of Science and Technology of China (USTC).",
        website: "https://boyiwei.com/"
      }
    ]
  },
  {
    category: "Master's Students",
    members: [
      {
        name: "Nimra Nadeem",
        file: "nimra_nadeem.jpg",
        title: "Master's Student",
        bio: "I am a Software Engineer in the Bloomberg Law department at Bloomberg LP. I graduated from Princeton University in 2021, with a Bachelors of Arts (A.B.) with High Honors (Magna Cum Laude) in Computer Science and a certificate in Values and Public Life with a thematic focus on Theories of Social and Political Justice. I am interested in natural language processing, reinforcement learning, and computational control, and I care deeply about AI ethics, fairness, regulation, and safety.",
        website: "https://nimra-nadeem.github.io/"
      },
      {
        name: "Kylie Zhang",
        file: "kylie_zhang.jpg",
        title: "Master's Student",
        bio: "My friends say my personality can be boiled down to ice cream, hopping around places, and Taylor Swift. I research AI policy at CITP at Princeton, where I'm very lucky to be advised by Peter Henderson. I'm fascinated by how incentive systems shape when people scale.",
        website: "https://skyien-z.github.io/"
      }
    ]
  }
];
const overlay = {
  backgroundColor: "cornsilk"
};
const content = {
  color: "rebeccapurple",
  top: "50%",
  left: "50%",
  right: "auto",
  bottom: "auto",
  marginRight: "-50%",
  transform: "translate(-50%, -50%)"
};
const modalCustomStyle = {
  overlay,
  content
};
const filePathToProfileImages = "/profile_pictures/";
function ProfilePopup({ profile, setIsModalOpen }) {
  return /* @__PURE__ */ jsxs("div", { children: [
    /* @__PURE__ */ jsx("button", { onClick: () => setIsModalOpen(false), children: "Close" }),
    /* @__PURE__ */ jsx(
      "img",
      {
        width: 250,
        height: 250,
        alt: "Image of " + profile.name,
        src: filePathToProfileImages + profile.file
      }
    ),
    /* @__PURE__ */ jsx("h1", { children: /* @__PURE__ */ jsxs("a", { href: profile.website, target: "_blank", children: [
      profile.name,
      ", ",
      profile.title
    ] }) }),
    /* @__PURE__ */ jsxs("p", { children: [
      " ",
      profile.bio,
      " "
    ] })
  ] });
}
function ProfileGlimpse({ profile }) {
  return /* @__PURE__ */ jsxs("div", { id: "profile", children: [
    /* @__PURE__ */ jsx(
      "img",
      {
        width: 250,
        height: 250,
        alt: "Image of " + profile.name,
        src: filePathToProfileImages + profile.file
      }
    ),
    /* @__PURE__ */ jsx("p", { children: profile.name })
  ] });
}
function ProfileCard({ profile }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  function afterOpenModal() {
    console.log("opennned");
  }
  return /* @__PURE__ */ jsxs("div", { children: [
    /* @__PURE__ */ jsx("button", { onClick: () => setIsModalOpen(true), children: /* @__PURE__ */ jsx(ProfileGlimpse, { profile }) }),
    /* @__PURE__ */ jsx(
      Modal,
      {
        isOpen: isModalOpen,
        onAfterOpen: afterOpenModal,
        style: modalCustomStyle,
        onRequestClose: () => setIsModalOpen(false),
        contentLabel: "Example Modal",
        children: /* @__PURE__ */ jsx(ProfilePopup, { profile, setIsModalOpen })
      }
    )
  ] });
}
const people = withComponentProps(function Home2() {
  return /* @__PURE__ */ jsx("div", {
    children: peopleInfo.map((categoryToPeople, index) => /* @__PURE__ */ jsxs("div", {
      children: [categoryToPeople.category, categoryToPeople.members.map((profile, index2) => /* @__PURE__ */ jsx(ProfileCard, {
        profile
      }))]
    }))
  });
});
const route4 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: people
}, Symbol.toStringTag, { value: "Module" }));
const publicationsJson = [
  {
    title: "An Adversarial Perspective on Machine Unlearning for AI Safety",
    pdf: "http://arxiv.org/abs/2409.18025v3",
    authors: [
      "Jakub Łucki",
      "Boyi Wei",
      "Yangsibo Huang",
      "Peter Henderson",
      "Florian Tramèr",
      "Javier Rando"
    ],
    year: "2024",
    abstract: "Large language models are finetuned to refuse questions about hazardous\nknowledge, but these protections can often be bypassed. Unlearning methods aim\nat completely removing hazardous capabilities from models and make them\ninaccessible to adversaries. This work challenges the fundamental differences\nbetween unlearning and traditional safety post-training from an adversarial\nperspective. We demonstrate that existing jailbreak methods, previously\nreported as ineffective against unlearning, can be successful when applied\ncarefully. Furthermore, we develop a variety of adaptive methods that recover\nmost supposedly unlearned capabilities. For instance, we show that finetuning\non 10 unrelated examples or removing specific directions in the activation\nspace can recover most hazardous capabilities for models edited with RMU, a\nstate-of-the-art unlearning method. Our findings challenge the robustness of\ncurrent unlearning approaches and question their advantages over safety\ntraining.",
    published: "2024-09-26T16:32:19Z",
    updated: "2024-11-08T22:06:41Z",
    publication_venue: "",
    code: "",
    site: "",
    comments: "Spotlight paper at Neurips 2024 SoLaR workshop"
  },
  {
    title: "Fantastic Copyrighted Beasts and How (Not) to Generate Them",
    pdf: "http://arxiv.org/abs/2406.14526v1",
    authors: [
      "Luxi He",
      "Yangsibo Huang",
      "Weijia Shi",
      "Tinghao Xie",
      "Haotian Liu",
      "Yue Wang",
      "Luke Zettlemoyer",
      "Chiyuan Zhang",
      "Danqi Chen",
      "Peter Henderson"
    ],
    year: "2024",
    abstract: `Recent studies show that image and video generation models can be prompted to
reproduce copyrighted content from their training data, raising serious legal
concerns around copyright infringement. Copyrighted characters, in particular,
pose a difficult challenge for image generation services, with at least one
lawsuit already awarding damages based on the generation of these characters.
Yet, little research has empirically examined this issue. We conduct a
systematic evaluation to fill this gap. First, we build CopyCat, an evaluation
suite consisting of diverse copyrighted characters and a novel evaluation
pipeline. Our evaluation considers both the detection of similarity to
copyrighted characters and generated image's consistency with user input. Our
evaluation systematically shows that both image and video generation models can
still generate characters even if characters' names are not explicitly
mentioned in the prompt, sometimes with only two generic keywords (e.g.,
prompting with "videogame, plumber" consistently generates Nintendo's Mario
character). We then introduce techniques to semi-automatically identify such
keywords or descriptions that trigger character generation. Using our
evaluation suite, we study runtime mitigation strategies, including both
existing methods and new strategies we propose. Our findings reveal that
commonly employed strategies, such as prompt rewriting in the DALL-E system,
are not sufficient as standalone guardrails. These strategies must be coupled
with other approaches, like negative prompting, to effectively reduce the
unintended generation of copyrighted characters. Our work provides empirical
grounding to the discussion of copyright mitigation strategies and offers
actionable insights for model deployers actively implementing them.`,
    published: "2024-06-20T17:38:16Z",
    updated: "2024-06-20T17:38:16Z",
    publication_venue: "",
    code: "",
    site: "",
    comments: ""
  },
  {
    title: "Evaluating Copyright Takedown Methods for Language Models",
    pdf: "http://arxiv.org/abs/2406.18664v4",
    authors: [
      "Boyi Wei",
      "Weijia Shi",
      "Yangsibo Huang",
      "Noah A. Smith",
      "Chiyuan Zhang",
      "Luke Zettlemoyer",
      "Kai Li",
      "Peter Henderson"
    ],
    year: "2024",
    abstract: "Language models (LMs) derive their capabilities from extensive training on\ndiverse data, including potentially copyrighted material. These models can\nmemorize and generate content similar to their training data, posing potential\nconcerns. Therefore, model creators are motivated to develop mitigation methods\nthat prevent generating protected content. We term this procedure as copyright\ntakedowns for LMs, noting the conceptual similarity to (but legal distinction\nfrom) the DMCA takedown This paper introduces the first evaluation of the\nfeasibility and side effects of copyright takedowns for LMs. We propose\nCoTaEval, an evaluation framework to assess the effectiveness of copyright\ntakedown methods, the impact on the model's ability to retain uncopyrightable\nfactual knowledge from the training data whose recitation is embargoed, and how\nwell the model maintains its general utility and efficiency. We examine several\nstrategies, including adding system prompts, decoding-time filtering\ninterventions, and unlearning approaches. Our findings indicate that no tested\nmethod excels across all metrics, showing significant room for research in this\nunique problem setting and indicating potential unresolved challenges for live\npolicy proposals.",
    published: "2024-06-26T18:09:46Z",
    updated: "2024-10-11T17:42:43Z",
    publication_venue: "",
    code: "",
    site: "",
    comments: "31 pages, 9 figures, 14 tables"
  },
  {
    title: "What is in Your Safe Data? Identifying Benign Data that Breaks Safety",
    pdf: "http://arxiv.org/abs/2404.01099v2",
    authors: [
      "Luxi He",
      "Mengzhou Xia",
      "Peter Henderson"
    ],
    year: "2024",
    abstract: "Current Large Language Models (LLMs), even those tuned for safety and\nalignment, are susceptible to jailbreaking. Some have found that just further\nfine-tuning an aligned model with benign data (i.e., data without harmful\ncontent) surprisingly leads to substantial degradation in safety. We delve into\nthe data-centric aspects of why benign fine-tuning inadvertently contributes to\njailbreaking. First, we represent fine-tuning data through two lenses:\nrepresentation and gradient spaces. Additionally, we propose a bi-directional\nanchoring method that, during the selection process, prioritizes data points\nthat are close to harmful examples and far from benign ones. Our approach\neffectively identifies subsets of benign data that are more likely to degrade\nthe model's safety after fine-tuning. Training on just 100 of these seemingly\nbenign datapoints surprisingly leads to the fine-tuned model affirmatively\nresponding to >70% of tested harmful requests, compared to <20% after\nfine-tuning on randomly selected data. We also observe that the selected data\nfrequently appear as lists, bullet points, or math questions, indicating a\nsystematic pattern in fine-tuning data that contributes to jailbreaking.",
    published: "2024-04-01T13:12:30Z",
    updated: "2024-08-20T17:54:08Z",
    publication_venue: "",
    code: "",
    site: "",
    comments: ""
  },
  {
    title: "AI Risk Management Should Incorporate Both Safety and Security",
    pdf: "http://arxiv.org/abs/2405.19524v1",
    authors: [
      "Xiangyu Qi",
      "Yangsibo Huang",
      "Yi Zeng",
      "Edoardo Debenedetti",
      "Jonas Geiping",
      "Luxi He",
      "Kaixuan Huang",
      "Udari Madhushani",
      "Vikash Sehwag",
      "Weijia Shi",
      "Boyi Wei",
      "Tinghao Xie",
      "Danqi Chen",
      "Pin-Yu Chen",
      "Jeffrey Ding",
      "Ruoxi Jia",
      "Jiaqi Ma",
      "Arvind Narayanan",
      "Weijie J Su",
      "Mengdi Wang",
      "Chaowei Xiao",
      "Bo Li",
      "Dawn Song",
      "Peter Henderson",
      "Prateek Mittal"
    ],
    year: "2024",
    abstract: 'The exposure of security vulnerabilities in safety-aligned language models,\ne.g., susceptibility to adversarial attacks, has shed light on the intricate\ninterplay between AI safety and AI security. Although the two disciplines now\ncome together under the overarching goal of AI risk management, they have\nhistorically evolved separately, giving rise to differing perspectives.\nTherefore, in this paper, we advocate that stakeholders in AI risk management\nshould be aware of the nuances, synergies, and interplay between safety and\nsecurity, and unambiguously take into account the perspectives of both\ndisciplines in order to devise mostly effective and holistic risk mitigation\napproaches. Unfortunately, this vision is often obfuscated, as the definitions\nof the basic concepts of "safety" and "security" themselves are often\ninconsistent and lack consensus across communities. With AI risk management\nbeing increasingly cross-disciplinary, this issue is particularly salient. In\nlight of this conceptual challenge, we introduce a unified reference framework\nto clarify the differences and interplay between AI safety and AI security,\naiming to facilitate a shared understanding and effective collaboration across\ncommunities.',
    published: "2024-05-29T21:00:47Z",
    updated: "2024-05-29T21:00:47Z",
    publication_venue: "",
    code: "",
    site: "",
    comments: ""
  },
  {
    title: "Assessing the Brittleness of Safety Alignment via Pruning and Low-Rank\n  Modifications",
    pdf: "http://arxiv.org/abs/2402.05162v4",
    authors: [
      "Boyi Wei",
      "Kaixuan Huang",
      "Yangsibo Huang",
      "Tinghao Xie",
      "Xiangyu Qi",
      "Mengzhou Xia",
      "Prateek Mittal",
      "Mengdi Wang",
      "Peter Henderson"
    ],
    year: "2024",
    abstract: "Large language models (LLMs) show inherent brittleness in their safety\nmechanisms, as evidenced by their susceptibility to jailbreaking and even\nnon-malicious fine-tuning. This study explores this brittleness of safety\nalignment by leveraging pruning and low-rank modifications. We develop methods\nto identify critical regions that are vital for safety guardrails, and that are\ndisentangled from utility-relevant regions at both the neuron and rank levels.\nSurprisingly, the isolated regions we find are sparse, comprising about $3\\%$\nat the parameter level and $2.5\\%$ at the rank level. Removing these regions\ncompromises safety without significantly impacting utility, corroborating the\ninherent brittleness of the model's safety mechanisms. Moreover, we show that\nLLMs remain vulnerable to low-cost fine-tuning attacks even when modifications\nto the safety-critical regions are restricted. These findings underscore the\nurgent need for more robust safety strategies in LLMs.",
    published: "2024-02-07T18:34:38Z",
    updated: "2024-10-24T19:21:52Z",
    publication_venue: "",
    code: "",
    site: "",
    comments: "22 pages, 9 figures. Project page is available at\n  https://boyiwei.com/alignment-attribution/"
  },
  {
    title: "Visual Adversarial Examples Jailbreak Aligned Large Language Models",
    pdf: "http://arxiv.org/abs/2306.13213v2",
    authors: [
      "Xiangyu Qi",
      "Kaixuan Huang",
      "Ashwinee Panda",
      "Peter Henderson",
      "Mengdi Wang",
      "Prateek Mittal"
    ],
    year: "2023",
    abstract: "Recently, there has been a surge of interest in integrating vision into Large\nLanguage Models (LLMs), exemplified by Visual Language Models (VLMs) such as\nFlamingo and GPT-4. This paper sheds light on the security and safety\nimplications of this trend. First, we underscore that the continuous and\nhigh-dimensional nature of the visual input makes it a weak link against\nadversarial attacks, representing an expanded attack surface of\nvision-integrated LLMs. Second, we highlight that the versatility of LLMs also\npresents visual attackers with a wider array of achievable adversarial\nobjectives, extending the implications of security failures beyond mere\nmisclassification. As an illustration, we present a case study in which we\nexploit visual adversarial examples to circumvent the safety guardrail of\naligned LLMs with integrated vision. Intriguingly, we discover that a single\nvisual adversarial example can universally jailbreak an aligned LLM, compelling\nit to heed a wide range of harmful instructions that it otherwise would not)\nand generate harmful content that transcends the narrow scope of a `few-shot'\nderogatory corpus initially employed to optimize the adversarial example. Our\nstudy underscores the escalating adversarial risks associated with the pursuit\nof multimodality. Our findings also connect the long-studied adversarial\nvulnerabilities of neural networks to the nascent field of AI alignment. The\npresented attack suggests a fundamental adversarial challenge for AI alignment,\nespecially in light of the emerging trend toward multimodality in frontier\nfoundation models.",
    published: "2023-06-22T22:13:03Z",
    updated: "2023-08-16T22:38:55Z",
    publication_venue: "",
    code: "",
    site: "",
    comments: ""
  },
  {
    title: "SORRY-Bench: Systematically Evaluating Large Language Model Safety\n  Refusal Behaviors",
    pdf: "http://arxiv.org/abs/2406.14598v1",
    authors: [
      "Tinghao Xie",
      "Xiangyu Qi",
      "Yi Zeng",
      "Yangsibo Huang",
      "Udari Madhushani Sehwag",
      "Kaixuan Huang",
      "Luxi He",
      "Boyi Wei",
      "Dacheng Li",
      "Ying Sheng",
      "Ruoxi Jia",
      "Bo Li",
      "Kai Li",
      "Danqi Chen",
      "Peter Henderson",
      "Prateek Mittal"
    ],
    year: "2024",
    abstract: "Evaluating aligned large language models' (LLMs) ability to recognize and\nreject unsafe user requests is crucial for safe, policy-compliant deployments.\nExisting evaluation efforts, however, face three limitations that we address\nwith SORRY-Bench, our proposed benchmark. First, existing methods often use\ncoarse-grained taxonomies of unsafe topics, and are over-representing some\nfine-grained topics. For example, among the ten existing datasets that we\nevaluated, tests for refusals of self-harm instructions are over 3x less\nrepresented than tests for fraudulent activities. SORRY-Bench improves on this\nby using a fine-grained taxonomy of 45 potentially unsafe topics, and 450\nclass-balanced unsafe instructions, compiled through human-in-the-loop methods.\nSecond, linguistic characteristics and formatting of prompts are often\noverlooked, like different languages, dialects, and more -- which are only\nimplicitly considered in many evaluations. We supplement SORRY-Bench with 20\ndiverse linguistic augmentations to systematically examine these effects.\nThird, existing evaluations rely on large LLMs (e.g., GPT-4) for evaluation,\nwhich can be computationally expensive. We investigate design choices for\ncreating a fast, accurate automated safety evaluator. By collecting 7K+ human\nannotations and conducting a meta-evaluation of diverse LLM-as-a-judge designs,\nwe show that fine-tuned 7B LLMs can achieve accuracy comparable to GPT-4 scale\nLLMs, with lower computational cost. Putting these together, we evaluate over\n40 proprietary and open-source LLMs on SORRY-Bench, analyzing their distinctive\nrefusal behaviors. We hope our effort provides a building block for systematic\nevaluations of LLMs' safety refusal capabilities, in a balanced, granular, and\nefficient manner.",
    published: "2024-06-20T17:56:07Z",
    updated: "2024-06-20T17:56:07Z",
    publication_venue: "",
    code: "",
    site: "",
    comments: ""
  },
  {
    title: "Safety Alignment Should Be Made More Than Just a Few Tokens Deep",
    pdf: "http://arxiv.org/abs/2406.05946v1",
    authors: [
      "Xiangyu Qi",
      "Ashwinee Panda",
      "Kaifeng Lyu",
      "Xiao Ma",
      "Subhrajit Roy",
      "Ahmad Beirami",
      "Prateek Mittal",
      "Peter Henderson"
    ],
    year: "2024",
    abstract: "The safety alignment of current Large Language Models (LLMs) is vulnerable.\nRelatively simple attacks, or even benign fine-tuning, can jailbreak aligned\nmodels. We argue that many of these vulnerabilities are related to a shared\nunderlying issue: safety alignment can take shortcuts, wherein the alignment\nadapts a model's generative distribution primarily over only its very first few\noutput tokens. We refer to this issue as shallow safety alignment. In this\npaper, we present case studies to explain why shallow safety alignment can\nexist and provide evidence that current aligned LLMs are subject to this issue.\nWe also show how these findings help explain multiple recently discovered\nvulnerabilities in LLMs, including the susceptibility to adversarial suffix\nattacks, prefilling attacks, decoding parameter attacks, and fine-tuning\nattacks. Importantly, we discuss how this consolidated notion of shallow safety\nalignment sheds light on promising research directions for mitigating these\nvulnerabilities. For instance, we show that deepening the safety alignment\nbeyond just the first few tokens can often meaningfully improve robustness\nagainst some common exploits. Finally, we design a regularized finetuning\nobjective that makes the safety alignment more persistent against fine-tuning\nattacks by constraining updates on initial tokens. Overall, we advocate that\nfuture safety alignment should be made more than just a few tokens deep.",
    published: "2024-06-10T00:35:23Z",
    updated: "2024-06-10T00:35:23Z",
    publication_venue: "",
    code: "",
    site: "",
    comments: ""
  },
  {
    title: "Fine-tuning Aligned Language Models Compromises Safety, Even When Users\n  Do Not Intend To!",
    pdf: "http://arxiv.org/abs/2310.03693v1",
    authors: [
      "Xiangyu Qi",
      "Yi Zeng",
      "Tinghao Xie",
      "Pin-Yu Chen",
      "Ruoxi Jia",
      "Prateek Mittal",
      "Peter Henderson"
    ],
    year: "2023",
    abstract: "Optimizing large language models (LLMs) for downstream use cases often\ninvolves the customization of pre-trained LLMs through further fine-tuning.\nMeta's open release of Llama models and OpenAI's APIs for fine-tuning GPT-3.5\nTurbo on custom datasets also encourage this practice. But, what are the safety\ncosts associated with such custom fine-tuning? We note that while existing\nsafety alignment infrastructures can restrict harmful behaviors of LLMs at\ninference time, they do not cover safety risks when fine-tuning privileges are\nextended to end-users. Our red teaming studies find that the safety alignment\nof LLMs can be compromised by fine-tuning with only a few adversarially\ndesigned training examples. For instance, we jailbreak GPT-3.5 Turbo's safety\nguardrails by fine-tuning it on only 10 such examples at a cost of less than\n$0.20 via OpenAI's APIs, making the model responsive to nearly any harmful\ninstructions. Disconcertingly, our research also reveals that, even without\nmalicious intent, simply fine-tuning with benign and commonly used datasets can\nalso inadvertently degrade the safety alignment of LLMs, though to a lesser\nextent. These findings suggest that fine-tuning aligned LLMs introduces new\nsafety risks that current safety infrastructures fall short of addressing --\neven if a model's initial safety alignment is impeccable, it is not necessarily\nto be maintained after custom fine-tuning. We outline and critically analyze\npotential mitigations and advocate for further research efforts toward\nreinforcing safety protocols for the custom fine-tuning of aligned LLMs.",
    published: "2023-10-05T17:12:17Z",
    updated: "2023-10-05T17:12:17Z",
    publication_venue: "",
    code: "",
    site: "",
    comments: ""
  }
];
function PublicationCard({ publication }) {
  const [showAbstract, setShowAbstract] = useState(false);
  return /* @__PURE__ */ jsxs("div", { className: "card", children: [
    /* @__PURE__ */ jsx("h2", { children: /* @__PURE__ */ jsx("a", { href: publication.pdf, target: "_blank", children: publication.title }) }),
    /* @__PURE__ */ jsx("p", { children: publication.text }),
    /* @__PURE__ */ jsxs("p", { children: [
      /* @__PURE__ */ jsx("strong", { children: "Authors:" }),
      " ",
      publication.authors.join(", ")
    ] }),
    /* @__PURE__ */ jsx("button", { onClick: () => setShowAbstract(!showAbstract), children: " * " }),
    showAbstract ? /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsx("p", { children: publication.abstract }) }) : /* @__PURE__ */ jsx(Fragment, {})
  ] });
}
const createYearToPublicationMapping = (filteredPublications) => {
  const yearToPublication = [];
  for (const publication of filteredPublications) {
    const publicationsOfYear = yearToPublication.find((mapping) => mapping.year === publication.year);
    if (publicationsOfYear === void 0) {
      yearToPublication.push({
        year: publication.year,
        publications: [publication]
      });
    } else {
      publicationsOfYear["publications"].push(publication);
    }
  }
  return yearToPublication;
};
const stringifyPublicationDetails = (publication) => {
  let publicationDetails = "";
  Object.keys(publication).forEach((key) => {
    publicationDetails += " " + publication[key];
  });
  return publicationDetails;
};
const patternInTextCaseInsensitive = (text, pattern) => {
  return text.toLowerCase().includes(pattern.toLowerCase());
};
const filterPublicationsOnSearchTerm = (searchTerm) => {
  const filteredPublications = [];
  for (const publication of publicationsJson) {
    const publicationDetails = stringifyPublicationDetails(publication);
    if (patternInTextCaseInsensitive(publicationDetails, searchTerm)) {
      filteredPublications.push(publication);
    }
  }
  return filteredPublications;
};
const publications = withComponentProps(function Publications() {
  const [publications2, setPublications] = useState(createYearToPublicationMapping(publicationsJson));
  const [searchTerm, setSearchTerm] = useState("");
  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };
  useEffect(() => {
    const filteredPublications = filterPublicationsOnSearchTerm(searchTerm);
    const yearToPublicationMapping = createYearToPublicationMapping(filteredPublications);
    setPublications(yearToPublicationMapping);
  }, [searchTerm]);
  return /* @__PURE__ */ jsxs("div", {
    className: "page",
    children: [/* @__PURE__ */ jsx("input", {
      type: "text",
      placeholder: "Search...",
      value: searchTerm,
      onChange: handleInputChange
    }), publications2.map((yearToPublication, index) => /* @__PURE__ */ jsxs("div", {
      children: [/* @__PURE__ */ jsx("h1", {
        children: yearToPublication.year
      }), yearToPublication.publications.map((publicationEntry, pubIndex) => /* @__PURE__ */ jsx(PublicationCard, {
        publication: publicationEntry
      }, pubIndex))]
    }, index))]
  });
});
const route5 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: publications
}, Symbol.toStringTag, { value: "Module" }));
const contact = withComponentProps(function Contact() {
  return /* @__PURE__ */ jsx("p", {
    children: "contact"
  });
});
const route6 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: contact
}, Symbol.toStringTag, { value: "Module" }));
const serverManifest = { "entry": { "module": "/assets/entry.client-AAJDFvzi.js", "imports": ["/assets/chunk-K6AXKMTT-DwHzYmPC.js", "/assets/index-C_PcL8bC.js"], "css": [] }, "routes": { "root": { "id": "root", "parentId": void 0, "path": "", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": true, "module": "/assets/root-DMwvxhST.js", "imports": ["/assets/chunk-K6AXKMTT-DwHzYmPC.js", "/assets/index-C_PcL8bC.js", "/assets/with-props-6XspwbLD.js"], "css": [] }, "routes/scaffolding": { "id": "routes/scaffolding", "parentId": "root", "path": "/", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": false, "module": "/assets/scaffolding-C03jHOyA.js", "imports": ["/assets/with-props-6XspwbLD.js", "/assets/chunk-K6AXKMTT-DwHzYmPC.js"], "css": [] }, "routes/home": { "id": "routes/home", "parentId": "routes/scaffolding", "path": void 0, "index": true, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": false, "module": "/assets/home-cq_IPD-4.js", "imports": ["/assets/with-props-6XspwbLD.js", "/assets/chunk-K6AXKMTT-DwHzYmPC.js"], "css": [] }, "routes/about": { "id": "routes/about", "parentId": "routes/scaffolding", "path": "about", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": false, "module": "/assets/about-DgcP2Yk7.js", "imports": ["/assets/with-props-6XspwbLD.js", "/assets/chunk-K6AXKMTT-DwHzYmPC.js"], "css": [] }, "routes/people": { "id": "routes/people", "parentId": "routes/scaffolding", "path": "people", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": false, "module": "/assets/people-B-byPOO_.js", "imports": ["/assets/with-props-6XspwbLD.js", "/assets/chunk-K6AXKMTT-DwHzYmPC.js", "/assets/index-C_PcL8bC.js"], "css": [] }, "routes/publications": { "id": "routes/publications", "parentId": "routes/scaffolding", "path": "publications", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": false, "module": "/assets/publications-9KoFyDqT.js", "imports": ["/assets/with-props-6XspwbLD.js", "/assets/chunk-K6AXKMTT-DwHzYmPC.js"], "css": [] }, "routes/contact": { "id": "routes/contact", "parentId": "routes/scaffolding", "path": "contact", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": false, "module": "/assets/contact-DLP_-bQl.js", "imports": ["/assets/with-props-6XspwbLD.js", "/assets/chunk-K6AXKMTT-DwHzYmPC.js"], "css": [] } }, "url": "/assets/manifest-849eafbb.js", "version": "849eafbb" };
const assetsBuildDirectory = "build/client";
const basename = "/";
const future = { "unstable_optimizeDeps": false };
const isSpaMode = false;
const publicPath = "/";
const entry = { module: entryServer };
const routes = {
  "root": {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: route0
  },
  "routes/scaffolding": {
    id: "routes/scaffolding",
    parentId: "root",
    path: "/",
    index: void 0,
    caseSensitive: void 0,
    module: route1
  },
  "routes/home": {
    id: "routes/home",
    parentId: "routes/scaffolding",
    path: void 0,
    index: true,
    caseSensitive: void 0,
    module: route2
  },
  "routes/about": {
    id: "routes/about",
    parentId: "routes/scaffolding",
    path: "about",
    index: void 0,
    caseSensitive: void 0,
    module: route3
  },
  "routes/people": {
    id: "routes/people",
    parentId: "routes/scaffolding",
    path: "people",
    index: void 0,
    caseSensitive: void 0,
    module: route4
  },
  "routes/publications": {
    id: "routes/publications",
    parentId: "routes/scaffolding",
    path: "publications",
    index: void 0,
    caseSensitive: void 0,
    module: route5
  },
  "routes/contact": {
    id: "routes/contact",
    parentId: "routes/scaffolding",
    path: "contact",
    index: void 0,
    caseSensitive: void 0,
    module: route6
  }
};
export {
  serverManifest as assets,
  assetsBuildDirectory,
  basename,
  entry,
  future,
  isSpaMode,
  publicPath,
  routes
};
