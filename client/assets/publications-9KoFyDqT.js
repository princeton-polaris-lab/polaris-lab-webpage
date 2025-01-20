import{w as f}from"./with-props-6XspwbLD.js";import{r as o,l as e}from"./chunk-K6AXKMTT-DwHzYmPC.js";const c=[{title:"An Adversarial Perspective on Machine Unlearning for AI Safety",pdf:"http://arxiv.org/abs/2409.18025v3",authors:["Jakub Łucki","Boyi Wei","Yangsibo Huang","Peter Henderson","Florian Tramèr","Javier Rando"],year:"2024",abstract:`Large language models are finetuned to refuse questions about hazardous
knowledge, but these protections can often be bypassed. Unlearning methods aim
at completely removing hazardous capabilities from models and make them
inaccessible to adversaries. This work challenges the fundamental differences
between unlearning and traditional safety post-training from an adversarial
perspective. We demonstrate that existing jailbreak methods, previously
reported as ineffective against unlearning, can be successful when applied
carefully. Furthermore, we develop a variety of adaptive methods that recover
most supposedly unlearned capabilities. For instance, we show that finetuning
on 10 unrelated examples or removing specific directions in the activation
space can recover most hazardous capabilities for models edited with RMU, a
state-of-the-art unlearning method. Our findings challenge the robustness of
current unlearning approaches and question their advantages over safety
training.`,published:"2024-09-26T16:32:19Z",updated:"2024-11-08T22:06:41Z",publication_venue:"",code:"",site:"",comments:"Spotlight paper at Neurips 2024 SoLaR workshop"},{title:"Fantastic Copyrighted Beasts and How (Not) to Generate Them",pdf:"http://arxiv.org/abs/2406.14526v1",authors:["Luxi He","Yangsibo Huang","Weijia Shi","Tinghao Xie","Haotian Liu","Yue Wang","Luke Zettlemoyer","Chiyuan Zhang","Danqi Chen","Peter Henderson"],year:"2024",abstract:`Recent studies show that image and video generation models can be prompted to
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
actionable insights for model deployers actively implementing them.`,published:"2024-06-20T17:38:16Z",updated:"2024-06-20T17:38:16Z",publication_venue:"",code:"",site:"",comments:""},{title:"Evaluating Copyright Takedown Methods for Language Models",pdf:"http://arxiv.org/abs/2406.18664v4",authors:["Boyi Wei","Weijia Shi","Yangsibo Huang","Noah A. Smith","Chiyuan Zhang","Luke Zettlemoyer","Kai Li","Peter Henderson"],year:"2024",abstract:`Language models (LMs) derive their capabilities from extensive training on
diverse data, including potentially copyrighted material. These models can
memorize and generate content similar to their training data, posing potential
concerns. Therefore, model creators are motivated to develop mitigation methods
that prevent generating protected content. We term this procedure as copyright
takedowns for LMs, noting the conceptual similarity to (but legal distinction
from) the DMCA takedown This paper introduces the first evaluation of the
feasibility and side effects of copyright takedowns for LMs. We propose
CoTaEval, an evaluation framework to assess the effectiveness of copyright
takedown methods, the impact on the model's ability to retain uncopyrightable
factual knowledge from the training data whose recitation is embargoed, and how
well the model maintains its general utility and efficiency. We examine several
strategies, including adding system prompts, decoding-time filtering
interventions, and unlearning approaches. Our findings indicate that no tested
method excels across all metrics, showing significant room for research in this
unique problem setting and indicating potential unresolved challenges for live
policy proposals.`,published:"2024-06-26T18:09:46Z",updated:"2024-10-11T17:42:43Z",publication_venue:"",code:"",site:"",comments:"31 pages, 9 figures, 14 tables"},{title:"What is in Your Safe Data? Identifying Benign Data that Breaks Safety",pdf:"http://arxiv.org/abs/2404.01099v2",authors:["Luxi He","Mengzhou Xia","Peter Henderson"],year:"2024",abstract:`Current Large Language Models (LLMs), even those tuned for safety and
alignment, are susceptible to jailbreaking. Some have found that just further
fine-tuning an aligned model with benign data (i.e., data without harmful
content) surprisingly leads to substantial degradation in safety. We delve into
the data-centric aspects of why benign fine-tuning inadvertently contributes to
jailbreaking. First, we represent fine-tuning data through two lenses:
representation and gradient spaces. Additionally, we propose a bi-directional
anchoring method that, during the selection process, prioritizes data points
that are close to harmful examples and far from benign ones. Our approach
effectively identifies subsets of benign data that are more likely to degrade
the model's safety after fine-tuning. Training on just 100 of these seemingly
benign datapoints surprisingly leads to the fine-tuned model affirmatively
responding to >70% of tested harmful requests, compared to <20% after
fine-tuning on randomly selected data. We also observe that the selected data
frequently appear as lists, bullet points, or math questions, indicating a
systematic pattern in fine-tuning data that contributes to jailbreaking.`,published:"2024-04-01T13:12:30Z",updated:"2024-08-20T17:54:08Z",publication_venue:"",code:"",site:"",comments:""},{title:"AI Risk Management Should Incorporate Both Safety and Security",pdf:"http://arxiv.org/abs/2405.19524v1",authors:["Xiangyu Qi","Yangsibo Huang","Yi Zeng","Edoardo Debenedetti","Jonas Geiping","Luxi He","Kaixuan Huang","Udari Madhushani","Vikash Sehwag","Weijia Shi","Boyi Wei","Tinghao Xie","Danqi Chen","Pin-Yu Chen","Jeffrey Ding","Ruoxi Jia","Jiaqi Ma","Arvind Narayanan","Weijie J Su","Mengdi Wang","Chaowei Xiao","Bo Li","Dawn Song","Peter Henderson","Prateek Mittal"],year:"2024",abstract:`The exposure of security vulnerabilities in safety-aligned language models,
e.g., susceptibility to adversarial attacks, has shed light on the intricate
interplay between AI safety and AI security. Although the two disciplines now
come together under the overarching goal of AI risk management, they have
historically evolved separately, giving rise to differing perspectives.
Therefore, in this paper, we advocate that stakeholders in AI risk management
should be aware of the nuances, synergies, and interplay between safety and
security, and unambiguously take into account the perspectives of both
disciplines in order to devise mostly effective and holistic risk mitigation
approaches. Unfortunately, this vision is often obfuscated, as the definitions
of the basic concepts of "safety" and "security" themselves are often
inconsistent and lack consensus across communities. With AI risk management
being increasingly cross-disciplinary, this issue is particularly salient. In
light of this conceptual challenge, we introduce a unified reference framework
to clarify the differences and interplay between AI safety and AI security,
aiming to facilitate a shared understanding and effective collaboration across
communities.`,published:"2024-05-29T21:00:47Z",updated:"2024-05-29T21:00:47Z",publication_venue:"",code:"",site:"",comments:""},{title:`Assessing the Brittleness of Safety Alignment via Pruning and Low-Rank
  Modifications`,pdf:"http://arxiv.org/abs/2402.05162v4",authors:["Boyi Wei","Kaixuan Huang","Yangsibo Huang","Tinghao Xie","Xiangyu Qi","Mengzhou Xia","Prateek Mittal","Mengdi Wang","Peter Henderson"],year:"2024",abstract:`Large language models (LLMs) show inherent brittleness in their safety
mechanisms, as evidenced by their susceptibility to jailbreaking and even
non-malicious fine-tuning. This study explores this brittleness of safety
alignment by leveraging pruning and low-rank modifications. We develop methods
to identify critical regions that are vital for safety guardrails, and that are
disentangled from utility-relevant regions at both the neuron and rank levels.
Surprisingly, the isolated regions we find are sparse, comprising about $3\\%$
at the parameter level and $2.5\\%$ at the rank level. Removing these regions
compromises safety without significantly impacting utility, corroborating the
inherent brittleness of the model's safety mechanisms. Moreover, we show that
LLMs remain vulnerable to low-cost fine-tuning attacks even when modifications
to the safety-critical regions are restricted. These findings underscore the
urgent need for more robust safety strategies in LLMs.`,published:"2024-02-07T18:34:38Z",updated:"2024-10-24T19:21:52Z",publication_venue:"",code:"",site:"",comments:`22 pages, 9 figures. Project page is available at
  https://boyiwei.com/alignment-attribution/`},{title:"Visual Adversarial Examples Jailbreak Aligned Large Language Models",pdf:"http://arxiv.org/abs/2306.13213v2",authors:["Xiangyu Qi","Kaixuan Huang","Ashwinee Panda","Peter Henderson","Mengdi Wang","Prateek Mittal"],year:"2023",abstract:`Recently, there has been a surge of interest in integrating vision into Large
Language Models (LLMs), exemplified by Visual Language Models (VLMs) such as
Flamingo and GPT-4. This paper sheds light on the security and safety
implications of this trend. First, we underscore that the continuous and
high-dimensional nature of the visual input makes it a weak link against
adversarial attacks, representing an expanded attack surface of
vision-integrated LLMs. Second, we highlight that the versatility of LLMs also
presents visual attackers with a wider array of achievable adversarial
objectives, extending the implications of security failures beyond mere
misclassification. As an illustration, we present a case study in which we
exploit visual adversarial examples to circumvent the safety guardrail of
aligned LLMs with integrated vision. Intriguingly, we discover that a single
visual adversarial example can universally jailbreak an aligned LLM, compelling
it to heed a wide range of harmful instructions that it otherwise would not)
and generate harmful content that transcends the narrow scope of a \`few-shot'
derogatory corpus initially employed to optimize the adversarial example. Our
study underscores the escalating adversarial risks associated with the pursuit
of multimodality. Our findings also connect the long-studied adversarial
vulnerabilities of neural networks to the nascent field of AI alignment. The
presented attack suggests a fundamental adversarial challenge for AI alignment,
especially in light of the emerging trend toward multimodality in frontier
foundation models.`,published:"2023-06-22T22:13:03Z",updated:"2023-08-16T22:38:55Z",publication_venue:"",code:"",site:"",comments:""},{title:`SORRY-Bench: Systematically Evaluating Large Language Model Safety
  Refusal Behaviors`,pdf:"http://arxiv.org/abs/2406.14598v1",authors:["Tinghao Xie","Xiangyu Qi","Yi Zeng","Yangsibo Huang","Udari Madhushani Sehwag","Kaixuan Huang","Luxi He","Boyi Wei","Dacheng Li","Ying Sheng","Ruoxi Jia","Bo Li","Kai Li","Danqi Chen","Peter Henderson","Prateek Mittal"],year:"2024",abstract:`Evaluating aligned large language models' (LLMs) ability to recognize and
reject unsafe user requests is crucial for safe, policy-compliant deployments.
Existing evaluation efforts, however, face three limitations that we address
with SORRY-Bench, our proposed benchmark. First, existing methods often use
coarse-grained taxonomies of unsafe topics, and are over-representing some
fine-grained topics. For example, among the ten existing datasets that we
evaluated, tests for refusals of self-harm instructions are over 3x less
represented than tests for fraudulent activities. SORRY-Bench improves on this
by using a fine-grained taxonomy of 45 potentially unsafe topics, and 450
class-balanced unsafe instructions, compiled through human-in-the-loop methods.
Second, linguistic characteristics and formatting of prompts are often
overlooked, like different languages, dialects, and more -- which are only
implicitly considered in many evaluations. We supplement SORRY-Bench with 20
diverse linguistic augmentations to systematically examine these effects.
Third, existing evaluations rely on large LLMs (e.g., GPT-4) for evaluation,
which can be computationally expensive. We investigate design choices for
creating a fast, accurate automated safety evaluator. By collecting 7K+ human
annotations and conducting a meta-evaluation of diverse LLM-as-a-judge designs,
we show that fine-tuned 7B LLMs can achieve accuracy comparable to GPT-4 scale
LLMs, with lower computational cost. Putting these together, we evaluate over
40 proprietary and open-source LLMs on SORRY-Bench, analyzing their distinctive
refusal behaviors. We hope our effort provides a building block for systematic
evaluations of LLMs' safety refusal capabilities, in a balanced, granular, and
efficient manner.`,published:"2024-06-20T17:56:07Z",updated:"2024-06-20T17:56:07Z",publication_venue:"",code:"",site:"",comments:""},{title:"Safety Alignment Should Be Made More Than Just a Few Tokens Deep",pdf:"http://arxiv.org/abs/2406.05946v1",authors:["Xiangyu Qi","Ashwinee Panda","Kaifeng Lyu","Xiao Ma","Subhrajit Roy","Ahmad Beirami","Prateek Mittal","Peter Henderson"],year:"2024",abstract:`The safety alignment of current Large Language Models (LLMs) is vulnerable.
Relatively simple attacks, or even benign fine-tuning, can jailbreak aligned
models. We argue that many of these vulnerabilities are related to a shared
underlying issue: safety alignment can take shortcuts, wherein the alignment
adapts a model's generative distribution primarily over only its very first few
output tokens. We refer to this issue as shallow safety alignment. In this
paper, we present case studies to explain why shallow safety alignment can
exist and provide evidence that current aligned LLMs are subject to this issue.
We also show how these findings help explain multiple recently discovered
vulnerabilities in LLMs, including the susceptibility to adversarial suffix
attacks, prefilling attacks, decoding parameter attacks, and fine-tuning
attacks. Importantly, we discuss how this consolidated notion of shallow safety
alignment sheds light on promising research directions for mitigating these
vulnerabilities. For instance, we show that deepening the safety alignment
beyond just the first few tokens can often meaningfully improve robustness
against some common exploits. Finally, we design a regularized finetuning
objective that makes the safety alignment more persistent against fine-tuning
attacks by constraining updates on initial tokens. Overall, we advocate that
future safety alignment should be made more than just a few tokens deep.`,published:"2024-06-10T00:35:23Z",updated:"2024-06-10T00:35:23Z",publication_venue:"",code:"",site:"",comments:""},{title:`Fine-tuning Aligned Language Models Compromises Safety, Even When Users
  Do Not Intend To!`,pdf:"http://arxiv.org/abs/2310.03693v1",authors:["Xiangyu Qi","Yi Zeng","Tinghao Xie","Pin-Yu Chen","Ruoxi Jia","Prateek Mittal","Peter Henderson"],year:"2023",abstract:`Optimizing large language models (LLMs) for downstream use cases often
involves the customization of pre-trained LLMs through further fine-tuning.
Meta's open release of Llama models and OpenAI's APIs for fine-tuning GPT-3.5
Turbo on custom datasets also encourage this practice. But, what are the safety
costs associated with such custom fine-tuning? We note that while existing
safety alignment infrastructures can restrict harmful behaviors of LLMs at
inference time, they do not cover safety risks when fine-tuning privileges are
extended to end-users. Our red teaming studies find that the safety alignment
of LLMs can be compromised by fine-tuning with only a few adversarially
designed training examples. For instance, we jailbreak GPT-3.5 Turbo's safety
guardrails by fine-tuning it on only 10 such examples at a cost of less than
$0.20 via OpenAI's APIs, making the model responsive to nearly any harmful
instructions. Disconcertingly, our research also reveals that, even without
malicious intent, simply fine-tuning with benign and commonly used datasets can
also inadvertently degrade the safety alignment of LLMs, though to a lesser
extent. These findings suggest that fine-tuning aligned LLMs introduces new
safety risks that current safety infrastructures fall short of addressing --
even if a model's initial safety alignment is impeccable, it is not necessarily
to be maintained after custom fine-tuning. We outline and critically analyze
potential mitigations and advocate for further research efforts toward
reinforcing safety protocols for the custom fine-tuning of aligned LLMs.`,published:"2023-10-05T17:12:17Z",updated:"2023-10-05T17:12:17Z",publication_venue:"",code:"",site:"",comments:""}];function p({publication:n}){const[t,a]=o.useState(!1);return e.jsxs("div",{className:"card",children:[e.jsx("h2",{children:e.jsx("a",{href:n.pdf,target:"_blank",children:n.title})}),e.jsx("p",{children:n.text}),e.jsxs("p",{children:[e.jsx("strong",{children:"Authors:"})," ",n.authors.join(", ")]}),e.jsx("button",{onClick:()=>a(!t),children:" * "}),t?e.jsx(e.Fragment,{children:e.jsx("p",{children:n.abstract})}):e.jsx(e.Fragment,{})]})}const d=n=>{const t=[];for(const a of n){const i=t.find(r=>r.year===a.year);i===void 0?t.push({year:a.year,publications:[a]}):i.publications.push(a)}return t},m=n=>{let t="";return Object.keys(n).forEach(a=>{t+=" "+n[a]}),t},y=(n,t)=>n.toLowerCase().includes(t.toLowerCase()),v=n=>{const t=[];for(const a of c){const i=m(a);y(i,n)&&t.push(a)}return t},L=f(function(){const[t,a]=o.useState(d(c)),[i,r]=o.useState(""),u=s=>{r(s.target.value)};return o.useEffect(()=>{const s=v(i),l=d(s);a(l)},[i]),e.jsxs("div",{className:"page",children:[e.jsx("input",{type:"text",placeholder:"Search...",value:i,onChange:u}),t.map((s,l)=>e.jsxs("div",{children:[e.jsx("h1",{children:s.year}),s.publications.map((h,g)=>e.jsx(p,{publication:h},g))]},l))]})});export{L as default};
